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
	res.render('contact')
});
router.get('/projects/quote'), (req,res,next) => {
	res.render('project-quote')

}
router.get('/projects/pagination'), (req,res,next) => {
	res.render('project-pagination')
	
}
router.get('/projects/bootstrap-form'), (req,res,next) => {
	res.render('project-bootstrap-form')
	
}
router.get('/projects/tic-tac-toe'), (req,res,next) => {
	res.locals.projects = 'tictactoe';
	res.render('project-tic-tac-toe')
	
}
router.get('/projects/movie-search-app'), (req,res,next) => {
	res.render('project-movie-search-app')
	
}

module.exports = router;