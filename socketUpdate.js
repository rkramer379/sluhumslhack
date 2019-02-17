var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var locationData = [];
var timeout = 30;
var open = true;
var socket = 3000;


io.on('connection', function(socket) {

  socket.on('locationUpdate', function(locationData) {

    if (locationData.length == 0) {
      setTimeout(function() {
        open = false;
        //put the location prediction and emit the update predictions to the users
      }, timeout * 1000);
    }

    if (answer == 'yes' && open) {
      locationData.push([req.body.latitude, req.body.longitude])
    }

  });
});
