const ping = require('./bill_routes');
const addBill = require('./bill_routes');
const getBills = require('./bill_routes');

module.exports = function (app) {
    ping(app);
    addBill(app);
    getBills(app);
};