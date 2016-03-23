module.exports = function () {

    //Fetches data for profile view. User id is in the request (public profile) if not looks for it in session (private page with edit links).
    //Must set flag for profile template (private or public view)
    return function (req, res, next) {
        console.log("FetchDataForUser");
        return next();
    }

};
