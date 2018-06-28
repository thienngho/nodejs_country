const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();
const fs = require('fs');

emitter.on('start_read', function(file_name){
    console.log("Started Reading file....");
    fs.readFile(file_name, 'utf8', function (err, data) {
        if (err) {
            emitter.emit('error', err);
        }
        else {
            console.log("Done Reading file....");
            emitter.emit('print_content', data);
        }
    });

});

emitter.on('print_content', function(data){
    let data_obj = JSON.parse(data);

    data_obj.forEach(function(value) {
        setTimeout(() => {
            console.log('Country', value.country);
            console.log('Capital City', value.city);
            console.log('Country index', data_obj.indexOf(value));
        }, 1000);
    });

});

emitter.on('error',function(type){

    console.log("Faced error: " + type);
    emitter.emit('done');

});

emitter.emit('start_read','./country-by-capital-city.json');

emitter.removeListener('print_content',function(){
});

emitter.removeAllListeners('start_read');
