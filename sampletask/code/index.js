var express = require('express');
var faker = require('faker');
var app = express();

var users = [];
for (var i = 0; i < 3003; i++) {
	users.push(faker.name.findName());
}

app.get('/activeDrivers', , function(req, res){
    // ...
    res.send('response');
});

app.get('/users', function(req, res){
    res.send(users);
});

app.get('/locations', , function(req, res){
    // ...
    res.send('response');
});

var port = process.env.port || 49001;
app.listen(port);

console.log('Express server started on port %s', port);