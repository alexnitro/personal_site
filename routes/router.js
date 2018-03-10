var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.locals.title = "Melbourne Freelance Web Developer";
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
router.get('/project/quote', (req,res,next) => {
	res.locals.projects = 'quotes';
	res.render('quote');
});
router.get('/project/pagination', (req,res,next) => {
	res.locals.projects = 'pagination';
	res.render('pagination');
});
router.get('/project/bootstrap-form', (req,res,next) => {
	res.locals.projects = 'form'
	res.render('form');
});
router.get('/project/tic-tac-toe', (req,res,next) => {
	res.locals.css =
	res.locals.projects = 'tictactoe';
	res.render('tictactoe');
});
router.get('/project/movie-search-app', (req,res,next) => {
	res.locals.css = 'moviesearch'
	res.locals.projects = 'moviesearch';
	res.render('moviesearch');
});
router.get('/project/weather', (req,res,next) => {
	res.locals.projects = 'weather';
	res.render('weather');
});
router.get('/project/wikipedia', (req,res,next) => {
	res.locals.projects = 'wikipedia';
	res.render('wikipedia');
});
router.post('/contact', (req,res) => {
	console.log(req.body);
	res.send('Contact has been made with the backend');
})

module.exports = router;