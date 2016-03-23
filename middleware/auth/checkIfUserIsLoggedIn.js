module.exports = function () {

    //Check if user session is present, if so redirect to '/'
    return function (req, res, next) {
        console.log("checkIfUserLoggedIn");
        return next();
    }

};