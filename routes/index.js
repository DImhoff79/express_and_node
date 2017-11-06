var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trucks', function(req,res,next){
res.send("This is the test endpoint, it doesnt use a view");
});

module.exports = router;
