var async = require('async');
var pty = require('pty.js');
var server = require('http').createServer();
var io = require('socket.io')(server);
var fs = require('fs');

var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

var containers = {};

// 172.17.42.1, port 3000

// Load files
var filenames = ['index.js', 'package.json'];
var files = {};
filenames.forEach(function(filename) {
	fs.readFile('sampletask/code/' + filename, 'utf8', function(err, file) {
		if (!err) {
			files[filename] = file;
		}
	});
})

io.on('connection', function(socket) {
	console.log('connection');

	docker.createContainer({Image: 'neeraj/interview', Cmd: ['/sbin/init']}, function (err, container) {
		if (err) {
			console.error(err);
			return;
		}

		console.log(container);

		container.start(function (err, data) {
			containers[container.id] = container;

			var term = pty.spawn('', ['-c', 'docker-enter ' + container.id], {
				name: 'xterm-color',
				cols: 80,
				rows: 24,
				cwd: process.env.HOME,
				env: process.env
			});

			socket.emit('term', 'Welcome to the terminal\r\n');
			socket.emit('term', 'This is a real linux box\r\n');

			term.on('data', function(data) {
				socket.emit('term', data);
			});

			console.log(term.process);

			socket.on('term', function(data) {
				term.write(data);
			});

			socket.on('event', function(data){});

			socket.on('disconnect', function() {
				container.kill(function(err, data) {
					delete containers[container.id];
					console.log('killed container ' + container.id);
				});
			});

			socket.on('code', function(data) {
				if (files[data.filename]) {
					socket.emit('code', files[data.filename]);
				}
			});

			socket.emit('code', 'test');
		});
	});
});

process.on('SIGINT', function() {
	console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
	async.map(Object.keys(containers), function(containerId, callback) {
		containers[containerId].kill(function(err, data) {
			console.log('killed container ' + containerId);
			callback();
		});
	},
	function(err) {
		process.exit();
	});
});

server.listen(49000);
