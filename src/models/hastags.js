const mongoose =  require('mongoose');

const hashtagSchema  = new mongoose.Schema({
    
    title : {
        type : String,
        required :true
    },

    tweets : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Tweet'
    }]


},{timestamps : true }); 

const Hastag = mongoose.model('Hashtag',hashtagSchema);
module.exports = Hastag;