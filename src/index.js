const express  =require('express');
const connect = require('./config/database');


const app = express();

const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const HashtagRepository  = require('./repository/hashtag-repository');

const TweetService = require('./services/tweet-Service');


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
        content : 'this is after #process really #excited, #yeahhh this is going to be #fun'
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