const moment = require('moment');

const obj = {
    bar: function bar(format) {
        return moment().format(format);     
    },
    b: 88000
};

module.exports = obj;