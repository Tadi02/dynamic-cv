module.exports = function () {

    //Return a json formatted response
    return function (req, res) {
        console.log("ReturnJSONResponse");
        res.json(res.tpl);
    }

};
