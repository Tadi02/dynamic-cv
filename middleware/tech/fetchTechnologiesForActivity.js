module.exports = function () {

    //Fetches technologies for an activity by id (id is in request)
    return function (req, res, next) {
        console.log("FetchTechnologiesForActivity");
        res.tpl.technologies = [{id: 1, name: 'Cutting edge tech'}, {id: 2, name: 'Some Old Tech'}, {id: 3, name: 'NodeJS'}];
        return next();
    }
};
