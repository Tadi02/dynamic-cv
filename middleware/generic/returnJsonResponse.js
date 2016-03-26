module.exports = function () {

    //Return a json formatted response
    return function (req, res, next) {
        console.log("ReturnJSONResponse");
        res.json();
    }

};
