var express = require('express');
var router = express.Router();
const Tweet = require('./tweet')
const Public = require('./public')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/api/v1', Tweet)

router.use('/api/', Public)

module.exports = router;
