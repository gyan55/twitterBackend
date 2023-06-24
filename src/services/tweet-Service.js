const {TweetRepository,HashtagRepository}  = require('../repository/index');

class TweetService{
   
    constructor (){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
 
    async create (data){
        const tweet = await this.tweetRepository.create(data);
        const content = data.content;
        let tags  = content.match(/#[a-zA-Z0-9_]+/g);//this regex extracyts the hashtags
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);       
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
         console.log(titleOfPresenttags); 
        
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));

        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet._id]}
        }); 
              
        await this.hashtagRepository.bulkCreate(newTags);

        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet._id);
            tag.save();
        });
        return tweet;

    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

module.exports = TweetService;