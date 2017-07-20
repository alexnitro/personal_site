var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.locals.title = "My Wonderful Website";
	res.locals.page = "homepage";
	res.locals.pageType = 'main';
	res.render('index')
});
router.get('/about', (req,res,next) => {
	res.locals.title = "About Me";
	res.locals.page = 'about';
	res.locals.pageType = 'main';
	res.render('about');
});
router.get('/project', (req,res,next) => {
	res.locals.title = "My Projects";
	res.locals.page = 'project';
	res.locals.pageType = 'main';
	res.render('projects')
});
router.get('/contact', (req,res,next) => {
	res.locals.title = "Contact Me";
	res.locals.pageType = 'main';
	res.render('contact')
});
router.get('/projects/quote', (req,res,next) => {
	res.locals.projects = 'quotes';
	res.render('quote');
});
router.get('/projects/pagination', (req,res,next) => {
	res.locals.projects = 'pagination';
	res.render('pagination');
});
router.get('/projects/bootstrap-form', (req,res,next) => {
	res.locals.projects = 'form'
	res.render('form');
});
router.get('/projects/tic-tac-toe', (req,res,next) => {
	res.locals.css =
	res.locals.projects = 'tictactoe';
	res.render('tictactoe');
});
router.get('/projects/movie-search-app', (req,res,next) => {
	res.locals.css = 'moviesearch'
	res.locals.projects = 'moviesearch';
	res.render('moviesearch');
});
router.get('/projects/weather', (req,res,next) => {
	res.locals.projects = 'weather';
	res.render('weather');
});
router.get('/projects/wikipedia', (req,res,next) => {
	res.locals.projects = 'wikipedia';
	res.render('wikipedia');
});

module.exports = router;