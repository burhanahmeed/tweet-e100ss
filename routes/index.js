var express = require('express');
var router = express.Router();
const Tweet = require('./tweet')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/v1', Tweet)

module.exports = router;
