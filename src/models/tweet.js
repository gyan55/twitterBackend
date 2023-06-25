import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250,'tweet cannot be more than 250 chars']
    } 
     
},{
    timestamps: true
}
);

tweetSchema.virtual('contentWithEmail').get( function process (){
      return `${this.content} \n creayted by: ${this.userEmail}`;
});
// we are creating a model called Tweet and it will follow the tweetschema
const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;

