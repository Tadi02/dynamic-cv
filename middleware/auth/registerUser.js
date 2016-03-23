module.exports = function () {

    //If POST data is present register user. If there was an error put message into response else redirect user to '/login'.
    return function (req, res, next) {
        console.log("Register user");
        return next();
    }

};
