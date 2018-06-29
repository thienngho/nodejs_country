const EventEmitter = require('events');
const fs = require('fs');
const sleep = require('sleeping');

class Country extends EventEmitter {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    readData() {
        let text = fs.readFileSync(this.filename);
        let jsonContent = JSON.parse(text);
        let i = 0;
        for (i; i<jsonContent.length; i++) {
            var data = {
                country: jsonContent[i].country,
                city: jsonContent[i].city,
                index: i
            };
            this.emit('countrydata', data);
            sleep.for(1000);
        }
    }
}

module.exports = Country;
