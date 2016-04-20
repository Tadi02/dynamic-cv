var Technology = require('../../models/technology');

module.exports = function () {

    //Fetches technologies from db
    return function (req, res, next) {
        Technology.find({user: req.session.user}).exec(function (err, technologies) {
            if(err) console.log("Could not fetch technologies");
            res.tpl.technologies = technologies;
            return next();
        });
    }
};
