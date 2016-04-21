module.exports = function () {

    //Checks if the profile id provided in the request belongs to the logged in user, if so redirect to "/editprofile"
    return function (req, res, next) {
        if (typeof req.params.id === 'undefined'){
            return next();
        }

        if(req.params.id == req.session.user){
            res.redirect('/editprofile');
        }else{
            return next();
        }
    }
};