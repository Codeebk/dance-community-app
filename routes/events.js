var router = require('express').Router();
var eventsCtrl = require('../controllers/events');

// GET /events

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.new);
router.get('/:id', eventsCtrl.show);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /users
// /:id/facts


router.post('/', isLoggedIn, eventsCtrl.create);

// DELETE /facts/:id
router.delete('/:id', eventsCtrl.delEvent);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;