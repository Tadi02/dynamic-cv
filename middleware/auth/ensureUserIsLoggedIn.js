module.exports = function () {

    //If no user session present redirect to /login
    return function (req, res, next){
        console.log("EnsureUserIsLoggedIn");
        return next();
    };

};