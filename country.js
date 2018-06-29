const EventEmitter = require('events');
const fs = require('fs');

class Country extends EventEmitter {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    readData() {
        try {
            let text = fs.readFileSync(this.filename);
            let jsonContent = JSON.parse(text);

            jsonContent.forEach(item => {
                var data = {
                    country: item.country,
                    city: item.city,
                    index: jsonContent.indexOf(item)
                }
                setTimeout(() => {
                    this.emit('countrydata', data);
                }, 1000);
            });
        } catch (error) {
            console.error('There was an error: ' +error);
            return;
        }
    }
}

module.exports = Country;
