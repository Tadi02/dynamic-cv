var Activity = require('../../models/activity');

module.exports = function () {

    //Adds a new activity to the db
    return function (req, res, next) {
        //Parameter missing or empty
        if ((typeof req.body.name === 'undefined') || (req.body.name.length == 0) || (typeof req.body.type === 'undefined')){
            return next();
        }

        //Save new tech
        var activity = new Activity({name: req.body.name, type: req.body.type, time: req.body.time, description: req.body.description, technologies: [], user: req.session.user});
        activity.save(function (err) {
            if(err) console.log("Could not save activity.");
            return next();
        });
    };

};