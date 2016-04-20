module.exports = function () {

    //Check if user session is present, if so redirect to '/editprofile
    return function (req, res, next) {
        if(typeof req.session.user === 'undefined'){
            return next();
        }
        res.redirect('/editprofile');
    }

};