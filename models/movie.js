var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name:String,
  image:String,
  praise:String,
  // taobaoId:String
});
module.exports = mongoose.model('Movie', MovieSchema);