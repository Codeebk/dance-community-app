var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String
}, {
  timestamps: true
});

var eventSchema = new mongoose.Schema({
  title: String, 
  company: String,
  choreographer: String,
  description: String,
  location: String,
  time: String,
  user: [userSchema]
}, {
  timestamps: true
});



module.exports = mongoose.model('Event', eventSchema);