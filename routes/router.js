var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.locals.title = "My Wonderful Website"
	res.locals.page = "homepage"
	res.render('index')
});
router.get('/about', (req,res,next) => {
	res.render('about')
});
router.get('/project', (req,res,next) => {
	res.render('project')
});
router.get('/contact', (req,res,next) => {
	res.render('contact')
});

module.exports = router;