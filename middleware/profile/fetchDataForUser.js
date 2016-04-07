module.exports = function () {

    //Fetches data for profile view. User id is in the request (public profile) if not looks for it in session (private page with edit links).
    //Must set flag for profile template (private or public view)
    return function (req, res, next) {
        console.log("FetchDataForUser");
        var activities = [];
        activities.push({name: 'Big Money Ltd.', type: 'WORKPLACE', time: '2014-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name:'Cutting edge tech'},{name:'Some Old Tech'}]});
        activities.push({name: 'Huge Money Ltd.', type: 'WORKPLACE', time: '2012-2014', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name:'Cutting edge tech'}]});
        activities.push({name: 'Programmable Home Pálinka Brewer', type: 'PROJECT', time: '2014', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name:'Cutting edge tech'},{name:'Some Old Tech'}]});
        activities.push({name: 'Programmable Home Beer Brewer ', type: 'PROJECT', time: '2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name: 'Some Old Tech'}]});
        res.tpl.activities = activities;
        {}
        //TODO get this from session
        res.tpl.username = 'Alex Test';
        return next();
    }

};
