var Twit = require('twit')

var     fs = require('fs'),
      config = require('/path/to/your/config.js');
	  
var T = new Twit(config);

T.post('statuses/update', { status: 'hello ladies+gents  !' }, function(err, data, response) {
  console.log(data)
});
