import express from 'express';

const router = express.Router();
import { createTweet } from '../../controllers/tweet-controllers.js';

router.post('/tweets',createTweet);



export default router;

