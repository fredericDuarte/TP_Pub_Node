var pubs = require('../mocks/pubs.json');


function listeAll() {


    var result = [];

    for (var i in pubs)
        result.push([i, pubs[i].name]);

    return result;

    // return pubs;

}


function listeOpen() {

    var result = [];
    var d = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";


    for (var i in pubs) {

        for (var m in pubs[i].openDays) {

            if (pubs[i].openDays[m] == weekdays[d.getDay()]) {

                result.push([i, pubs[i].name]);
            }
        }
    }

    return result;

}


module.exports = {

    listeAll: listeAll
    , listeOpen: listeOpen

};