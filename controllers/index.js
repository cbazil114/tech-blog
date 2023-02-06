const router = require('express').Router();
const apiRoutes = require('./api');
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.use('/api', apiRoutes);

router.get('/', withAuth, async (req, res) => {
    const allPosts = Post.findAll()
    const parsedPosts = (await allPosts).map(post => post.get({plain:true}))
    res.render('homepage', {
        posts: parsedPosts,
        logged_in: req.session.logged_in,
    })

})

router.get('/login', async (req,res) => {
    res.render('login', {title: 'Login'})
})

router.get('/dashboard', async (req,res) => {
    res.render('dashboard', {title: 'Dashboard'})
})

router.get('/post/:id', async (req,res) => {
    res.render('post', {title: 'Post', postId: req.params.id})
})


module.exports = router;
