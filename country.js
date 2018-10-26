const EventEmitter = require('events');
const fs = require('fs');

class Country extends EventEmitter {
    constructor(filename) {
        super();
        this.filename = filename;
    }

    readData() {
        try {
            fs.readFile(this.filename, function(err, text) {
                let jsonContent = JSON.parse(text.toString());
                jsonContent.forEach((item, index) => {
                    let interval = setInterval(() => {
                        var data = {
                            country: item.country,
                            city: item.city,
                            index
                        }
                        this.emit('countrydata', data);
                        clearInterval(interval);
                    }, index * 5000);
                });
            }.bind(this));
        } catch (error) {
            console.error('There was an error: ' +error);
            return;
        }
    }
}

module.exports = Country;
