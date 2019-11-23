var express = require('express');
var router = express.Router();
const axios = require('axios')
const Crawl = require('../control/crawler')

/* GET users listing. */
router.get('/crawl', function(req, res, next) {
  Crawl.crawl({}, res)
});

module.exports = router;
