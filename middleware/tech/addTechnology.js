module.exports = function () {

    //adds a new technology
    return function (req, res, next) {
        console.log("AddTechnology");
        return next();
    }
};
