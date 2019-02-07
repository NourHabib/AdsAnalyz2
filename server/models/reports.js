const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repSchema = new Schema({
    advertiser_id : Number,
    campaign_id : Number,
    date : String,
    impressions : Number,
    clicks : Number,
    installs : Number,
    cost_micros : Number

});

module.exports = mongoose.model('rep', repSchema, 'reports');