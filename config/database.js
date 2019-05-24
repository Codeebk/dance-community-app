var mongoose = require('mongoose');
//changed movies to events below
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});