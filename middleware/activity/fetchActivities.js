module.exports = function () {

    //Fetch activities from db
    return function(req, res, next){
        console.log("FetchActivities");
        return next();
    };

};
