var bcrypt = require('bcrypt-nodejs');
var requireOption = require('../generic/common').requireOption;

module.exports = function (objectrepository) {

    var User = requireOption(objectrepository, 'userModel');

    //Authenticate user if user data is present in request. If there is an error add error info to res. If data is valid login the user and redirect to '/editprofile'
    return function (req, res, next) {
        if ((typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined') ){
            return next();
        }
        
        User.findOne({'email': req.body.email }, function (err, user) {
            if(err || user == null){
                res.tpl.error = "Not a registered email address";
                return next();
            }else {
                bcrypt.compare(req.body.password, user.password, function (err, compareResult) {
                    if (compareResult == true) {
                        req.session.user = user._id;
                        res.redirect('/editprofile');
                    }else{
                        res.tpl.error ="Wrong password";
                        return next();
                    }
                });
            }
        });
    }

};
