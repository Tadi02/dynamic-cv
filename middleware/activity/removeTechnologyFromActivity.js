module.exports = function () {

    //Removes a technology from an activity
    return function (req, res, next) {
        console.log("RemoveTechFromActivity");
        return next();
    };

};
