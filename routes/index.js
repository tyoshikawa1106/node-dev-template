var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var message = 'TOP';
  res.render('pages/index', { message : message });
});

module.exports = router;