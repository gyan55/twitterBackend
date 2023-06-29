import express from 'express';

const router = express.Router();
import { createTweet, getTweet } from '../../controllers/tweet-controllers.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { login, signUp } from '../../controllers/auth-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';

router.post('/tweets',authenticate,createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);
router.post('/signup',signUp);
router.post('/login',login);

router.get('/tweets/:id',getTweet);




export default router;

