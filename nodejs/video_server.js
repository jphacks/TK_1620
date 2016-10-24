var http = require('http'), // モジュールのロード
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');

var settings = require('./settings.js'); // 自作モジュールのロード
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/video.ejs', 'utf-8');

server.on('request', function(req, res) {
  var data = ejs.render(template, {
  });

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  console.log('done');

});

server.listen(settings.port, settings.host);
console.log('server listening ...');
