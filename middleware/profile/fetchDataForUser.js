var User = require('../../models/user');

module.exports = function () {

    //Fetches user data for profile view. User id is in the request (public profile) if not looks for it in session (private page with edit links).
    //Must set flag for profile template (private or public view)
    return function (req, res, next) {
        var userId = '';
        if(typeof req.params.id === 'undefined'){
            res.tpl.public = false;
            userId = req.session.user;
            res.tpl.publicLink = req.protocol + '://' + req.get('host') + '/profiles/' + userId;
        }else{
            res.tpl.public = true;
            userId = req.params.id;
        }

        if(typeof req.session.user === 'undefined'){
            res.tpl.userPresent = false;
        }else{
            res.tpl.userPresent = true;
        }

        User.findOne({'_id': userId }, function (err, user) {
            if (err) console.log('Could not fetch data for user');
            res.tpl.username = user.name;
            return next();
        });
    }

};
