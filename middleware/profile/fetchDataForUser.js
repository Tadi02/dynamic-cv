module.exports = function () {

    //Fetches user data for profile view. User id is in the request (public profile) if not looks for it in session (private page with edit links).
    //Must set flag for profile template (private or public view)
    return function (req, res, next) {
        console.log("FetchDataForUser");
        //TODO get this from session
        res.tpl.username = 'Alex Test';
        return next();
    }

};
