var Activity = require('../../models/activity');

module.exports = function () {

    //Fetches technologies for an activity by id (id is in request)
    return function (req, res, next) {
        if (typeof req.params.id === 'undefined') {
            return next();
        }

        Activity.findOne({_id: req.params.id}).populate('technologies').exec(function (err, activity) {
            if(err) console.log("Could not find techs for activity");
            res.tpl.technologies = activity.technologies;
            return next();
        });
    }
};
