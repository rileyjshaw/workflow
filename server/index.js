var async = require('async');
var pty = require('pty.js');
var server = require('http').createServer();
var io = require('socket.io')(server);

var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

var containers = {};

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

			term.on('data', function(data) {
				socket.emit('data', data);
			});

			console.log(term.process);

			socket.on('data', function(data) {
				term.write(data);
			});

			socket.on('event', function(data){});

			socket.on('disconnect', function() {
				container.kill(function(err, data) {
					delete containers[container.id];
					console.log('killed container ' + container.id);
				});
			});
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
