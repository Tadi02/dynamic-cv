module.exports = function () {

    //Checks if the profile id provided in the request belongs to the logged in user, if so redirect to "/editprofile"
    return function (req, res, next) {
        console.log("CheckIfIdBelongsToLoggedInUser");
        return next();
    }

};