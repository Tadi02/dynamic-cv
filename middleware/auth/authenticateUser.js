module.exports = function () {

    //Authenticate user if user data is present in request. If there is an error add error info to res. If data is valid login the user and redirect to '/editprofile'
    return function (req, res, next) {
        console.log("Authenticate");
        return next();
    }

}
