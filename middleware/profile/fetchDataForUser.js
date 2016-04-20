var User = require('../../models/user');

module.exports = function () {

    //Fetches user data for profile view. User id is in the request (public profile) if not looks for it in session (private page with edit links).
    //Must set flag for profile template (private or public view)
    //TODO public view and flag
    return function (req, res, next) {
        User.findOne({'_id': req.session.user }, function (err, user) {
            if (err) console.log('Could not fetch data for user');
            res.tpl.username = user.name;
            return next();
        });
    }

};
