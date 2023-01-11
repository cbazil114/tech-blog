const router = require('express').Router();
const { Comment, User } = require('../../models/');
const withAuth = require('../../utils/auth');

// Use GET to grab a comment
router.get('/', withAuth, async (req, res) => {
    try{
        const commentData = await Comment.findAll({
            include: [User],
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('comment', {
            comments,
            logged_in: req.session.logged_in,
          });
        } catch (err) {
          res.redirect('login');
        }
});

// Create new post route
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router