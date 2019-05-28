// const User = require('../models/user');
const Event = require('../models/event')

module.exports = {
  index,
  newEvent,
  delEvent,
  addEvent
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Event.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('events/index', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function newEvent(req, res) {
  res.render('events/new', { title: 'Add Event'});
}

function addEvent(req, res, next) {
     req.user.events.push(req.body);
    req.user.save(function(err) {
    res.redirect('/events');
   });
 }

function delEvent(req, res, next) {
  User.findOne({'events._id': req.params.id}, function(err, user) {
    user.events.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect('/events');
    });
  });
}