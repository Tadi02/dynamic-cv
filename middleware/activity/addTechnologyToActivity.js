var Activity = require('../../models/activity');
var Technology = require('../../models/technology');

module.exports = function () {

    //Adds a new technology to an activity
    return function (req, res, next) {
        if ((typeof req.params.id === 'undefined') || (typeof req.params.techId === 'undefined')) {
            return next();
        }
        
        Technology.findById(req.params.techId, function (err, tech) {
            if (err) {
                console.log("Could not add tech to activity");
                return next();
            }

            Activity.findById(req.params.id, function (err, activity) {
                if (err) {
                    console.log("Could not find activity");
                    return next();
                }

                for(var i=0; i < activity.technologies.length; i++){
                    if(activity.technologies[i] == req.params.techId){
                        return next();
                    }
                }

                Activity.update({_id: req.params.id}, {$push: {"technologies": tech}}, function (err) {
                    if (err) console.log("Could not add tech to activity");
                    return next();
                });
            });
        });

    };

};
