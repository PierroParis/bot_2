var Twit = require('twit')

var     fs = require('fs'),
      config = require('/home/paverrons/projet/twitter_bot/config.js');
	  
var T = new Twit(config);

T.get('followers/list', { user_id: 'enter_your_choice' }, function(err, data, response) {
  console.log(data)
});
