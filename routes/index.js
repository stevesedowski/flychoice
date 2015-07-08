var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.handlebars', { title: 'The Sabre Dev Studio APIs' });
});

module.exports = router;
