var Activity = require('../../models/activity');

module.exports = function () {

    //Fetch activities from db
    return function(req, res, next){
        var userId = '';
        if(typeof req.params.id === 'undefined'){
            userId = req.session.user;
        }else{
            userId = req.params.id;
        }
        Activity.find({user: userId}).populate('technologies').exec(function (err, activities) {
            if(err) console.log("Could not fetch activities");
            res.tpl.activities = activities;
            return next();
        });
    };

};
