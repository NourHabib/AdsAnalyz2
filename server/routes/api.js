const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Advs = require('../models/advertisors');
const Camps = require('../models/campaigns');
const Reps = require('../models/reports');

const db = "mongodb://nour:nour19@ds039427.mlab.com:39427/advertising";
mongoose.Promise = global.Promise;
mongoose.connect(db,function(err){
    if(err){
        console.error("Error! " + err);
    }
})
router.get('/advs', (req, res) => {
    console.log("Getting Advertisors data");
    Advs.find({}).exec(function(err, advs){
        if(err){
            console.log("Error in retrieving Advertisers");
        }else{
             res.json(advs);
        }
    });
});
router.get('/campaings/:id', (req, res) => {
    console.log("Getting Campiangs data");
    Camps.find({"advertiser_id" : req.params.id}).exec(function(err, camps){
        if(err){
            console.log("Error in retrieving Campiangs");
        }else{
             res.json(camps);
        }
    });
});
router.get('/reportsByAdvs/:id', (req, res) => {
    console.log("Getting Reports by Advertiser data");
    Reps.find({"advertiser_id" : req.params.id}).exec(function(err, camps){
        if(err){
            console.log("Error in retrieving Reports by Advertiser");
        }else{
             res.json(camps);
        }
    });
});
router.get('/reportsByCamp/:id', (req, res) => {
    console.log("Getting Reports by Campaing data");
    Reps.find({"campaign_id" : req.params.id}).exec(function(err, camps){
        if(err){
            console.log("Error in retrieving Reports by Campaings");
        }else{
             res.json(camps);
        }
    });
});
router.get('/reportsByCampOne/:id', (req, res) => {
    console.log("Getting One Report by Campaing data");
    Reps.findOne({"campaign_id" : req.params.id}).sort({date: -1}).exec(function(err, camps){
        if(err){
            console.log("Error in retrieving Reports by Campaings");
        }else{
             res.json(camps);
        }
    });
});
router.get('/', (req, res) => {
    res.send('api works and ready');
});


module.exports = router;