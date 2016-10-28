var Twitter = require('twitter');
var Keys = require('./keys.js');

var client = new Twitter({
  consumer_key: Keys.consumer_key,
  consumer_secret: Keys.consumer_secret,
  access_token_key: Keys.access_token,
  access_token_secret: Keys.access_secret
});

var query = {q: 'IoT', since:"2016-10-26_00:00:00_JST", until:"2016-10-26_23:59:59_JST", lang: "ja" };
client.get('search/tweets', query, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
