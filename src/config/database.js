// code to connect  to database

const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}

module.exports = connect; 