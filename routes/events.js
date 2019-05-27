var router = require('express').Router();
var eventsCtrl = require('../controllers/events');

// GET /users

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.newEvent);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /users
// /:id/facts


router.post('/events', isLoggedIn, eventsCtrl.newEvent);

// DELETE /facts/:id
router.delete('/events/:id', eventsCtrl.delEvent);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;