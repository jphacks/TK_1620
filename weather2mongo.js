var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings'),
    // fs = require('fs'),
    // $ = require('jquery'),
    http = require('http'),
    // location = "Tokyo,jp",
    // id = 1864518
    json = require('./sensor_data/lat_and_lon/output.json'),
    // lat = "35.6571819",
    // lon = "139.5404341",
    lat,
    lon,
    units = 'metric',
    APIKEY = 'fa306447ed12442125f1268ff6bbc6d3',
    url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units='+units+'&appid='+APIKEY;
    // by location
    // url = 'http://api.openweathermap.org/data/2.5/weather?q='+ location +'&units='+ units +'&appid='+ APIKEY;
    // by city id
    // url = 'http://api.openweathermap.org/data/2.5/weather?id='+ id +'&units='+ units +'&appid='+ APIKEY;


MongoClient.connect("mongodb://" + settings.host + "/" + settings.db, function(err, db){
  if (err) {
    return console.dir(err);
  }
  console.log("connected to db");

  for (var i = 0; i < Object.keys(json).length; i++){
      time = json[i].time;
      lat = json[i].lat;
      lon = json[i].lon;

      url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units='+units+'&appid='+APIKEY;

      // プロキシ環境下で必要
      // var options = {
      //   host: "proxy.uec.ac.jp",
      //   port: 8080,
      //   path: url
      // };

      // http.get(options, function(res){
      http.get(url, function(res){
        var body = '';
        res.setEncoding('utf-8');

        res.on('data', function(data){
          body += data;
        });
        res.on('end', function(data){
          db.collection("users", function(err, collection){
            var docs = [
              {time: JSON.parse(body).dt, location: JSON.parse(body).name, id: JSON.parse(body).id, weather: JSON.parse(body).weather, condition: JSON.parse(body).main}
            ];
            // DBに保管
            collection.insert(docs, function(err, result){
              console.dir(result)
            });

            var stream = collection.find({},{"_id":0}).stream();
            stream.on("data",function(item){
              console.log(item);
            });
            stream.on("end",function(){
              console.log("finished.");
            });
          });
        });
      });
  }
});
