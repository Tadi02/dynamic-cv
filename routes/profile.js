var ensureUserIsLoggedIn = require("../middleware/auth/ensureUserIsLoggedIn");
var fetchDataForUser = require("../middleware/profile/fetchDataForUser");
var renderTemplate = require("../middleware/generic/renderTemplate");
var checkIfUserIdBelongsToLoggedInUser = require("../middleware/profile/checkIfIdBelongsToLoggedInUser");
var fetchActivities = require("../middleware/activity/fetchActivities");

module.exports = function (app) {
    
    //Private profile page with edit links
    app.use('/editprofile',
        ensureUserIsLoggedIn(),
        fetchDataForUser(),
        fetchActivities(),
        renderTemplate("profile")
    );

    //Public profile page
    app.use('/profiles/:id',
        checkIfUserIdBelongsToLoggedInUser(),
        fetchDataForUser(),
        renderTemplate("profile")
    );
    
};
