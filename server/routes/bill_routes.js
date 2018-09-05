const controller = require('../controller/bill_controller');
const env = process.env.NODE_ENV;

module.exports = function (app) {
    //health check
    app.get('/api/ping', function (req, res) {
        res.send({message: 'pong!', env: env});
    });

    //add a bill
    app.post('/api/bill', controller.addBill);

    //get all bills
    app.get('/api/bill', controller.getBills);
};