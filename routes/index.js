var express = require('express');
var url = require('url');
var headers = Array;
var router = express.Router();
var u = url;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trucks', function(req,res,next){
res.send("This is the test endpoint, it doesnt use a view");
});

router.get('/trucks/test', function(req,res,next){
res.render('test', {title: 'Dave is cool'});

res.send(u.parse(req.originalUrl));


});

module.exports = router;
