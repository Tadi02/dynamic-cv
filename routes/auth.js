var preventReLogin = require("../middleware/auth/preventReLogin");
var authenticateUser = require("../middleware/auth/authenticateUser");
var renderTemplate = require("../middleware/generic/renderTemplate");
var registerUser = require("../middleware/auth/registerUser");

module.exports = function (app) {
    
    //Login page
    app.use('/login',
      preventReLogin(),
      authenticateUser(),
      renderTemplate("login")
    );
    
    //Registration page
    app.use('/register',
        preventReLogin(),
        registerUser(),
        renderTemplate("register")
    );
    
    
};