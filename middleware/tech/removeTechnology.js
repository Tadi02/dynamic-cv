var Technology = require('../../models/technology');

module.exports = function () {

    //removes technology from db
    return function (req, res, next) {
        if(typeof req.params.id === 'undefined'){
            return next();
        }

        Technology.remove({ _id: req.params.id }, function (err) {
            if (err) console.log("Failed to remove tech with id " + req.params.id);
            return next();
        });
    }
};
