var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerApp', {useMongoClient: true});

var db = mongoose.connection;
var data = require('../data.json');
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var brewerySchema = mongoose.Schema({
  id: {type: String, unique: true, required: true, dropDups: true},
  description: String,
  name: String,
  website: String
});

var Brewery = mongoose.model('Brewery', brewerySchema);

var selectAll = function(callback) {
  Brewery.find({}, function(err, breweries) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, breweries);
    }
  });
};

var writeToDB = function(data, callback) {
  Promise.all(data.map(function(brewery) {
    var temp = new Brewery({
      id: data.data.id,
      description: data.data.description,
      name: data.data.name,
      website: data.data.website
    });
    return brewery.save(function(err, brewery) {
      if(err) return console.log(err);
    });
  })).then(function(data) {
    callback(data);
  });
}

module.exports.selectAll = selectAll;
module.exports.writeToDB = writeToDB;