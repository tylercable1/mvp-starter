var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
var api = require('../helpers/apiRequest.js');
var db = require('../database-mongo/index.js');

app.get('/beers', function (req, res) {
  // items.selectAll(function(err, data) {

    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  // });
});

app.post('/breweries', function (req, res) {
  api.breweryRequest(req.body.q, function(err, resp, data){
  	if(err){
  	  console.log(err);
  	} else{
  	  res.json(JSON.parse(data));
  	}
  });
    
  // items.selectAll(function(err, data) {    
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

