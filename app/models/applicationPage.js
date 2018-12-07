const mongoose = require('mongoose');
const Schema   = mongoose.Schema;   

const applicationPageSchema = new Schema({
  title       : { type : String , default : ''},
  desc        : { type : String , default : ''},
  background  : { type : Object , default : ''},
  descTags       : { type : String , default : ''},
  keyTags       : { type : String , default : ''}
} , {timestamps : true});

module.exports = mongoose.model('ApplicationPage', applicationPageSchema);