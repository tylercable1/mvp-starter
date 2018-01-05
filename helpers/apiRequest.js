var request = require('request');
var config = require('../config.js');

var breweryRequest = function(qStr, callback) {
  var options = { 
	method: 'GET',
	url: 'http://api.brewerydb.com/v2/search',
	qs: 
	 { key: `${config.ApiKey}`,
	  q: `${qStr}`,
	  type: 'brewery' 
	 }
  }	 
  request(options, function (error, response, body) {
	if (error) throw new Error(error);
	callback(error, response, body);
  });
}



module.exports.breweryRequest = breweryRequest;