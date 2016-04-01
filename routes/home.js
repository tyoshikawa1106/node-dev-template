var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var message = 'HOME!';
  res.render('pages/home', { message : message });
});

module.exports = router;