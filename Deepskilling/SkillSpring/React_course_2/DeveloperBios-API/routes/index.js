var express = require('express');
const Developer = require('../models/developer');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


module.exports = router;
