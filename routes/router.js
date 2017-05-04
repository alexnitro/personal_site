var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.locals.title = "My Wonderful Website"
	res.locals.page = "homepage"
	res.render('index')
});
router.get('/about', (req,res,next) => {
	res.locals.page = 'about';
	res.render('about');
});
router.get('/project', (req,res,next) => {
	res.locals.page = 'project';
	res.render('projects')
});
router.get('/contact', (req,res,next) => {
	res.render('about')
});
router.get('/quote', (req,res,next) => {
	req.locals.project = 'quotes';
	res.render('quote');
});
router.get('/projects/pagination', (req,res,next) => {
	res.locals.projects = 'pagination';
	res.render('pagination')
});
router.get('/projects/bootstrap-form', (req,res,next) => {
	res.locals.css = '';
	res.locals.project = ''
	res.render('form')
});
router.get('/projects/tic-tac-toe', (req,res,next) => {
	res.locals.css =
	res.locals.project = 'tictactoe';
	res.render('tictactoe')
	
});
router.get('/projects/movie-search-app', (req,res,next) => {
	res.locals.css = ''
	res.render('moviesearch')	
});

module.exports = router;