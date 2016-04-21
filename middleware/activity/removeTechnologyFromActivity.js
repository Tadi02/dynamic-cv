var Activity = require('../../models/activity');

module.exports = function () {

    //Removes a technology from an activity
    return function (req, res, next) {
        if ((typeof req.params.id === 'undefined') || (typeof req.params.techId === 'undefined')) {
            return next();
        }

        Activity.update({_id: req.params.id}, {$pull: {"technologies": req.params.techId}}, function (err) {
            if (err) console.log("Could not remove tech from activity");
            return next();
        });
    };

};
