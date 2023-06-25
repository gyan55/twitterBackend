import TweetService from "../services/tweet-Service.js";
const tweetService = new TweetService();


export const createTweet = async (req,res) => {
     
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'sucessfully created a tweet',
            data:response,
            err:{}
        });
    } catch (error) {        
        return res.status(500).json({
            success: false,
            message:'something went wrong in controller layer',
            data:{},
            err:error
        });
    }
}