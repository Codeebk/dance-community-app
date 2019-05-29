// const User = require('../models/event');
const Event = require('../models/event')

module.exports = {
  index,
  new: newEvent,
  delEvent,
  create,
  show,
  updateEvent

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

  function show(req, res) {
    Event.findById(req.params.id, function(err, event) {
      res.render('events/show', {
        user: req.user,
        event
      });
    });
  }

  function updateEvent() {
    Event.updateOne({_id :
    req.params.id}).then(function() {
      res.redirect('/');
    });
  }



function delEvent(req, res, next) {
  Event.deleteOne({_id : req.params.id}).then(function(){
    res.redirect('/');
  }
  );
}
// function delEvent(req, res, next) {
//   Event.findOne({'event._id': req.params.id}, function(err, event) {
//     event.id(req.params.id).remove();
//     event.save(function(err) {
//       res.redirect('/events');
//     });
//   });
// }
