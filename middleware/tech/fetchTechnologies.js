module.exports = function () {

    //Fetches technologies from db
    return function (req, res, next) {
        console.log("FetchTechnologies");
        return next();
    }
};
