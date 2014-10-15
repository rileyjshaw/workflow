var express = require('express');
var faker = require('faker');
var app = express();

var citizens = [];
var locations = {};
var maxims = {
	war: 'peace',
	freedom: 'slavery',
	ignorance: 'strength'
};

for (var i = 0; i < 3003; i++) {
	citizens.push(faker.name.findName());
}

citizens.forEach(function (citizen) {
	locations[citizen] = {
		lat: faker.address.latitude(),
		lon: faker.address.longitude()
	};
});

app.get('/citizens', function(req, res){
    res.send(citizens);
});

app.get('/locations', function(req, res){
    res.send(locations);
});

app.get('/maxims', function(req, res){
    res.send(maxims);
});


var port = process.env.port || 49001;
app.listen(port);

console.log('Express server started on port %s', port);
