var mongoose = require('mongoose');
//changed movies to users below
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});