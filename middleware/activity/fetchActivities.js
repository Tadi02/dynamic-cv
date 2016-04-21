var Activity = require('../../models/activity');

module.exports = function () {

    //Fetch activities from db
    return function(req, res, next){
        Activity.find({user: req.session.user}).populate('technologies').exec(function (err, activities) {
            if(err) console.log("Could not fetch activities");
            res.tpl.activities = activities;
            return next();
        });
    };

};
