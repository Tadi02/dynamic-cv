module.exports = function () {

    //Check if user session is present, if so redirect to '/editprofile
    return function (req, res, next) {
        console.log("PreventReLogin");
        return next();
    }

};