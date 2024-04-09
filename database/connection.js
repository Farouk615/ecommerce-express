require('dotenv').config();
console.log("got to luv ya")
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

module.exports = db;