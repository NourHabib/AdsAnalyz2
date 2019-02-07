const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campSchema = new Schema({
    id : Number,
    advertiser_id : Number,
    name : String,
    start_date : String,
    end_date : String,
    cost_model : String,
    cost : Number

});

module.exports = mongoose.model('camp', campSchema, 'campaigns');