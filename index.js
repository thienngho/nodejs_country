const Country = require('./country');

const country = new Country('./country-by-capital-city.json');

country.on('countrydata', function(data){
    console.log('Country', data.country);
    console.log('Capital City', data.city);
    console.log('Country index', data.index);
});

country.readData();
