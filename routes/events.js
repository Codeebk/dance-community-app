var router = require('express').Router();
var eventsCtrl = require('../controllers/events');

// GET /events
//this is the main events page calls render
router.get('/', eventsCtrl.index);
// this call render and shows the new.ejs
router.get('/new', eventsCtrl.new);




//creates an event and redirects to the home page
router.post('/', isLoggedIn, eventsCtrl.create);
//UPDATE /events update events and all routes with a /:id must be at the bottom prevent other urls from blocking them
router.get('/:id', eventsCtrl.show);
router.post('/:id', eventsCtrl.updateEvent);
// DELETE /facts/:id
router.delete('/:id', eventsCtrl.delEvent);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;