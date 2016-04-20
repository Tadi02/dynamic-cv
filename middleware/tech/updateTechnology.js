var Technology = require('../../models/technology');

module.exports = function () {

    //Updates a technology in db
    return function (req, res, next) {
        if((typeof req.params.id === 'undefined') || (typeof req.body.name === 'undefined')){
            return next();
        }

        Technology.update({ _id: req.params.id }, { $set: { name: req.body.name }}, function (err) {
            if (err) console.log("Failed to update tech with id " + req.params.id);
            return next();
        });

    }
};
