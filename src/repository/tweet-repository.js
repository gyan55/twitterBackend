import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

constructor () {
    super(Tweet);
}

class TweetRepository extends CrudRepository{
    async create (data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
           console.log(error); 
        }
    } 
    
    async getWithComments(id){
        try {
           const tweet = await Tweet.findById(id).populate({path:'comments'});
           return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll(offset,limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
          } catch (error) {
              console.log(error);
          }
    }
}
export default  TweetRepository;
 