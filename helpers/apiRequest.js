var request = require('request');
var config = require('../config.js');

var breweryRequest = function(qStr, callback) {
  var options = { 
	method: 'GET',
	url: 'http://api.brewerydb.com/v2/search',
	qs: 
	 { key: `${config.ApiKey}`,
	  q: `${qStr}`,
	  type: 'brewery' },
	  headers: 
	   { 'Postman-Token': 'cd90d13b-b5fc-cc5b-e825-855fe9812540',
	     'Cache-Control': 'no-cache' } };
  request(options, function (error, response, body) {
	if (error) throw new Error(error);
	console.log(body);
  });
}



module.exports.breweryRequest = breweryRequest;