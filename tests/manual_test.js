var path = require('path'),
    zipcodes = require(path.join(__dirname, '../', 'lib'));

console.log(zipcodes.lookup(72713));