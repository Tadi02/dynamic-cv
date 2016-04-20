var Activity = require('../../models/activity');

module.exports = function () {

    //Removes an activity from db
    return function (req, res, next) {
        if(typeof req.params.id === 'undefined'){
            return next();
        }

        Activity.remove({ _id: req.params.id }, function (err) {
            if (err) console.log("Failed to remove activity with id " + req.params.id);
            return next();
        });
    };

};
