var checkIfUserIsLoggedInMW = require("../middleware/auth/checkIfUserIsLoggedIn");
var authenticateUser = require("../middleware/auth/authenticateUser");
var renderTemplate = require("../middleware/generic/renderTemplate");

module.exports = function (app) {
    
    //Login page
    app.use('/login',
      checkIfUserIsLoggedInMW(),
      authenticateUser(),
      renderTemplate("login")
    );
    
    
};