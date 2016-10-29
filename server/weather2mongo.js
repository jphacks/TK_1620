var MongoClient = require('mongodb').MongoClient,
    settings = require('./js/settings'),
    fs = require('fs');

// var app = require('express')();
// var server = require('http').Server(app);
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000;

var http = require('http'),
    json = require('../sensor_data/lat_and_lon/output.json');
var lat,
    lon;
var units = 'metric',
    APIKEY = 'fa306447ed12442125f1268ff6bbc6d3',
    url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units='+units+'&appid='+APIKEY;


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/sample'));

// socket.io
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

MongoClient.connect("mongodb://" + settings.host + "/" + settings.db, function(err, db){
  if (err) {
    return console.dir(err);
  }
  var docs = []
  console.log("connected to db");
  for (var i = 0; i < Object.keys(json).length; i++){
      time = json[i].time;
      lat = json[i].lat;
      lon = json[i].lon;
      url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units='+units+'&appid='+APIKEY;

        var temp = {};
        var body = '';
        res.setEncoding('utf-8');

        res.on('data', function(data){
          body += data;
          temp.time = JSON.parse(data).dt;
          temp.name = JSON.parse(data).name;
          temp.weather = JSON.parse(data).weather[0].main;
          temp.temperature = JSON.parse(data).main.temp;
          docs.push(temp);
        });

        res.on('end', function(data){
          console.log(temp);
          db.collection("users", function(err, collection){
            // DBに保管
            collection.insert(temp, function(err, result){
              console.dir(result)
            });
          });
        });
      });
  }
});
