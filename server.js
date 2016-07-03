var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs');
var ttn = require('ttn');

// Run the webserver on port 8080
server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Add Socket.io clients
io.on('connection', function (socket) {

  socket.on('start', function (data) {
    var appEUI = data.appEUI;
    console.log('Connecting to AppEUI: ' + appEUI);

    // Start the TTN Client
    var client = new ttn.Client('staging.thethingsnetwork.org', appEUI, data.accessKey);

    // Forward connection ok
    client.on('connect', function (msg) {
      console.log('Connected to TTN MQTT');
      socket.emit('ttn-connect', {})
    });

    // Forward uplink
    client.on('uplink', function (msg) {
      console.log('Uplink from Device: ' + msg.devEUI)
      socket.emit('uplink', msg)
    });

    // Forward activations
    client.on('activation', function (evt) {
      console.log('Activated Device: ' + evt.devEUI)
      socket.emit('activation', evt)
    });

    // Forward errors
    client.on('error', function (err) {
      console.log('Error: ' + err);
      socket.emit('ttn-error', { message: err.message });
    });

    // Close the TTN client on exit
    socket.on('disconnect', function () {
      client.end()
      console.log('Disconnected');
    });
  });

});
