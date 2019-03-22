var pubs = require('../mocks/pubs.json');

class Pubs {


    constructor(name, owner, openHours, beers, ...day) {

        this.name = name;
        this.owner = owner;
        this.openHours = openHours;
        this.beers = beers;
        this.openDays = day;

    }


}

class OpenHours {

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}


class Owner {

    constructor(firstName, lastName, mail) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }

}

class Beers {

    constructor(type, name) {

        this.type = type;
        this.name = name;
    }
}


function getPubs() {
    return pubs.map(item => new Pubs(
        item.name,
        new Owner(item.owner.firstName, item.owner.lastName, item.owner.mail),
        new OpenHours(item.openHours.start, item.openHours.end),
        item.beers.map (
            itemB => new Beers(itemB.type, itemB.name)
        ),
        item.openDays));


}

module.exports = {

    getPubs: getPubs


};

