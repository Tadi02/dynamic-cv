module.exports = function () {

    //Removes an activity from db
    return function (req, res, next) {
        console.log("removeActivity");
        return next();
    };

};
