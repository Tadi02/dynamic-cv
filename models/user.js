var db = require('../config/db');

var User = db.model('User', {
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

module.exports = User;