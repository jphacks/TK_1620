var express = require('express');
var http = require('http');
var path = require('path');
var io = require('socket.io');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var server = require('http').createServer(app);
var io = io.listen(server);

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.errorHandler());

server.listen(app.get('port'))

io.sockets.on('connection', function(socket) {
  socket.on('message:send', function(data) {
    io.sockets.emit('message:receive', { message: data.message });
  });
});
