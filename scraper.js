var request = require('request');
var url = "http://substack.net/images/"

request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});