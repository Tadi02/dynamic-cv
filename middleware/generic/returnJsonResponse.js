module.exports = function () {

    //Return a json formatted response
    return function (req, res) {
        res.json(res.tpl);
    }

};
