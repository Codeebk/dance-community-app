var mongoose = require('mongoose');


// var userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   avatar: String,
//   googleId: String
// }, {
//   timestamps: true
// });

var eventSchema = new mongoose.Schema({
  title: String, 
  company: String,
  choreographer: String,
  description: String,
  location: String,
  time: String,
  date: String
  // user: [userSchema]
}, {
  timestamps: true
});



module.exports = mongoose.model('Event', eventSchema);