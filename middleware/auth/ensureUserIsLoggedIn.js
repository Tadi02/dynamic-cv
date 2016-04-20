module.exports = function () {

    //If no user session present redirect to /login
    return function (req, res, next){
        if(typeof req.session.user !== 'undefined'){
            return next();
        }
        res.redirect('/login');
    };

};