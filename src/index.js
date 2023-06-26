import express from  'express';
import {connect} from './config/database.js';
import apiRoutes from '../src/routes/index.js';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api',apiRoutes);

//const Tweet = require('./models/tweet');
import {TweetRepository, HashtagRepository,userRepository} from './repository/index.js';
//const Comment = require('./models/comment');


import TweetService  from './services/tweet-Service.js';
import LikeService from './services/like-service.js';


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected');

   /* const tweet = await Tweet.create({
        content: 'First tweet',
        userEmail:'abc@gmail.com'
    }) */

    const userRepo = new userRepository();
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0,10);
    const users = await userRepo.getAll();  
   
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id);


   // await repo.bulkCreate([
       // {
           // title:'excited',
           //  tweets:[]
       // },      
    //])
   /* let service = new TweetService();
    const tweet = service.create({
        content : 'believe in  #process really #excited, #yeahhh this is going to be #lit'
   });
   console.log(tweet); */

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