// const User = require('../models/user');
const Event = require('../models/event')

module.exports = {
  index,
  new: newEvent,
  delEvent,
  create
};

function index(req, res, next) {
 Event.find({}, function(err, event) {

   res.render('events/index', {
     
     user: req.user,
     event
      });
    });

}

function newEvent(req, res) {
  res.render('events/new', { title: 'Add Event'});
}

function create(req, res, next) {
    var event = new Event(req.body);
    console.log(req.body);
    event.save(function(err) {
      if (err) {
        console.log(err);
        return res.redirect('/events/new');
      }
      res.redirect('/events');
    });
  }


    //  req.user.events.push(req.body);
    // req.user.save(function(err) {
    // res.redirect('/events');
//    });
//  }

function delEvent(req, res, next) {
  User.findOne({'events._id': req.params.id}, function(err, user) {
    user.events.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect('/events');
    });
  });
}
