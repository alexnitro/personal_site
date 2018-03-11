const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {res.render('index')});
router.get('/about', (req,res,next) => {res.render('about');});
router.get('/project', (req,res,next) => {res.render('projects')});
router.get('/contact', (req,res,next) => {res.render('contact')});
router.get('/services', (req,res,next) => {res.render('index')})

router.post('/contact', (req,res) => {
	console.log(req.body);
	res.send('Contact has been made with the backend');
})

module.exports = router;