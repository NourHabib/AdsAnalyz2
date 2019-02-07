const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const advsSchema = new Schema({
    id : Number,
    name : String
});


module.exports = mongoose.model('adv', advsSchema, 'advertisers');