module.exports = function () {

    //Fetch activities from db
    return function(req, res, next){
        console.log("FetchActivities");
        var activities = [];
        activities.push({id: 1, name: 'Big Money Ltd.', type: 'WORKPLACE', time: '2014-', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name:'Cutting edge tech'},{name:'Some Old Tech'}]});
        activities.push({id: 2, name: 'Huge Money Ltd.', type: 'WORKPLACE', time: '2012-2014', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{ name:'Cutting edge tech'}]});
        activities.push({id: 3, name: 'Programmable Home Pálinka Brewer', type: 'PROJECT', time: '2014', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name:'Cutting edge tech'},{name:'Some Old Tech'}]});
        activities.push({id: 4, name: 'Programmable Home Beer Brewer ', type: 'PROJECT', time: '2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: [{name: 'Some Old Tech'}]});
        res.tpl.activities = activities;
        return next();
    };

};
