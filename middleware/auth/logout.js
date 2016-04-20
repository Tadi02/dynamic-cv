module.exports = function () {

    //Destroy user session and redirect to login
    return function (req, res, next) {
        req.session.user = undefined;
        res.redirect('/login');
    }

};