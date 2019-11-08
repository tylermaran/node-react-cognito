const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comments');

// G1: GET All - Return all Club Detail
router.get('/', CommentController.get_all_comments);

router.post('/', CommentController.post_new_comment);


module.exports = router;
