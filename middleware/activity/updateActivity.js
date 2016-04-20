var Activity = require('../../models/activity');

module.exports = function () {

    //Updates an activity in db
    return function (req, res, next) {
        if ((typeof req.params.id === 'undefined') || (typeof req.body.name === 'undefined') ||
            (req.body.name.length == 0) || (typeof req.body.type === 'undefined')){
            return next();
        }

        Activity.update({ _id: req.params.id }, { $set: { name: req.body.name, type: req.body.type, time: req.body.time, description: req.body.description }}, function (err) {
            if (err) console.log("Failed to update activity with id " + req.params.id);
            return next();
        });
    };

};
