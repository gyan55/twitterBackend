const express  =require('express');
const connect = require('./config/database');


const app = express();

const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected');

   /* const tweet = await Tweet.create({
        content: 'First tweet',
        userEmail:'abc@gmail.com'
    }) */

    const tweetrepo = new TweetRepository();
    const tweet = await tweetrepo.getAll(2,4);
   // const tweet = await tweetrepo.create({
   //     content: 'latest tweet brewing'
    //});
    //const comment = await Comment.create({content: 'new comment'});
   // tweet.comments.push(comment);
   // await tweet.save();  


    console.log(tweet[0].contentWithEmail);
});