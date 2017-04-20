router.use('/', (req,res,next) => {
	res.render('index')
});
router.use('/about', (req,res,next) => {
	res.render('about')
});
router.use('/project', (req,res,next) => {
	res.render('project')
});
router.use('/contact', (req,res,next) => {
	res.render('contact')
});