import express from  'express';
import {connect} from './config/database.js';
import apiRoutes from '../src/routes/index.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api',apiRoutes);

app.use(passport.initialize());
passportAuth(passport);


import TweetService  from './services/tweet-Service.js';
import LikeService from './services/like-service.js';
import CommentService from './services/comment-service.js';


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected');

   /* const tweet = await Tweet.create({
        content: 'First tweet',
        userEmail:'abc@gmail.com'
    }) */


  
   /* let service = new TweetService();
    const tweet = service.create({
        content : 'believe in  #process really #excited, #yeahhh this is going to be #lit'
   });
   console.log(tweet); */

  // let service = new CommentService();
  // const comment = await service.create('64997fec68c43ad28feb8991','Tweet','64997bfa0ab8a5b775968f95','this is my first tweet');
   

   // const response = await repo.findByName(['excited','trend']);
    //console.log(response);

    //const tweet = await tweetrepo.getAll(2,4);
   // const tweet = await tweetrepo.create({
   //     content: 'latest tweet brewing'
    //});

    //const comment = await Comment.create({content: 'new comment'});
   // tweet.comments.push(comment);
   // await tweet.save();  


    
});