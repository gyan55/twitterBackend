const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
         required: true,
    },
    userEmail : {
        type : String
    },
    comments: [
        {
           type : mongoose.Schema.Types.ObjectId,
           ref:'Comment'
        }
    ]
},{
    timestamps: true
}
);

// we are creating a model called Tweet and it will follow the tweetschema
const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;

