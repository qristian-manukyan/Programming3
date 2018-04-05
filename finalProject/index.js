var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var universes = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('/public/index.html');
});
server.listen(3000);

io.on('connection', function(socket) {
   socket.on("send data", function(data) {
     universes.push(data);
   });
});
