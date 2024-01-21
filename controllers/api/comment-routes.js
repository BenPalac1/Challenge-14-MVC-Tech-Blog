const express = require('express')
const router = express.Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

  try {
    const newComment = await Comment.create({ ...req.body, user_Id: req.session.user_Id});
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//may add a delete route for this, similar to post

module.exports = router;