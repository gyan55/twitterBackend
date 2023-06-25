import express from  'express';
import {connect} from './config/database.js';


const app = express();

//const Tweet = require('./models/tweet');
import {TweetRepository, HashtagRepository} from './repository/index.js';
//const Comment = require('./models/comment');


import TweetService  from './services/tweet-Service.js';


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected');

   /* const tweet = await Tweet.create({
        content: 'First tweet',
        userEmail:'abc@gmail.com'
    }) */

    const tweetrepo = new TweetRepository();
    let repo = new HashtagRepository();

   // await repo.bulkCreate([
       // {
           // title:'excited',
           //  tweets:[]
       // },      
    //])
    let service = new TweetService();
    const tweet = service.create({
        content : 'believe in  #process really #excited, #yeahhh this is going to be #lit'
    });
    console.log(tweet);

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