var Twit = require('twit')

var	fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join('P:', 'projets', 'Twitter', 'bot', 'config.js'));
	
var T = new Twit(config);

T.post('statuses/update', { status: 'Salut les gens!!' }, function(err, data, response) {
  console.log(data)
});