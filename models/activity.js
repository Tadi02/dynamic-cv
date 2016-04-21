var db = require('../config/db');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

var Activity = db.model('Activity', {
    name: String,
    type: String,
    time: String,
    description: String,
    user: ObjectId,
    technologies: [{
        type: ObjectId,
        ref: 'Technology'
    }]
});

module.exports = Activity;

