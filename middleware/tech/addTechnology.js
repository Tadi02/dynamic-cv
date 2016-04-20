var Technology = require('../../models/technology');

module.exports = function () {

    //adds a new technology
    return function (req, res, next) {
        //Parameter missing or empty
        if ((typeof req.body.name === 'undefined') || (req.body.name.length == 0)){
            return next();
        }

        //Save new tech
        var tech = new Technology({name: req.body.name});
        tech.save(function (err) {
           if(err) console.log("Could not save technology.");
        });

        return next();
    }
};
