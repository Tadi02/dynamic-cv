module.exports = function () {

    //removes technology from db
    return function (req, res, next) {
        console.log("RemoveTechnology");
        return next();
    }
};
