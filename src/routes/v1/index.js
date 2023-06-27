import express from 'express';

const router = express.Router();
import { createTweet, getTweet } from '../../controllers/tweet-controllers.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';

router.post('/tweets',createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);

router.get('/tweets/:id',getTweet)



export default router;

