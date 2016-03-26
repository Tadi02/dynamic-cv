module.exports = function () {

    //Adds a new activity to the db
    return function (req, res, next) {
        console.log("addActivity");
        return next();
    };

};