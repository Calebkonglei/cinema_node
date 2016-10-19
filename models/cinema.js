var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CinemaSchema = new Schema({
  name: String,
  address: String,
  appraise: String
});

module.exports = mongoose.model('cinema', CinemaSchema);
