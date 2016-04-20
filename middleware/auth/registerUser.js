var User = require('../../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function () {

    //If POST data is present register user. If there was an error put message into response else redirect user to '/login'.
    return function (req, res, next) {
        //Parameter missing or empty
        if ((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined') ||
            (req.body.email.length == 0) || (typeof req.body.password === 'undefined') || (req.body.password.length == 0)  ){
            return next();
        }

        //Save new user
        var user = new User({name: req.body.name, email: req.body.email, password: bcrypt.hashSync(req.body.password)});
        user.save(function (err) {
            if(err){
                console.log("Could not save user.");
                return next();
            }else{
                res.redirect('/login');
            }
        });
    }

};
