const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage', {title: 'Homepage'})
})

router.get('/login', (req,res) => {
    res.render('login', {title: 'Login'})
})

router.get('/dashboard', (req,res) => {
    res.render('dashboard', {title: 'Dashboard'})
})

router.get('/post/:id', (req,res) => {
    res.render('post', {title: 'Post', postId: req.params.id})
})


module.exports = router;
