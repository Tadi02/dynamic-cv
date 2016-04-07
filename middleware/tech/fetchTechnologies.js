module.exports = function () {

    //Fetches technologies from db
    return function (req, res, next) {
        console.log("FetchTechnologies");
        res.tpl.technologies = [{id: 1, name: 'Cutting edge tech'}, {id: 2, name: 'Some Old Tech'}, {id: 3, name: 'NodeJS'}];
        return next();
    }
};
