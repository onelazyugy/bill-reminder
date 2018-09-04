const controller = require('../controller/bill_controller');

module.exports = function (app) {
    //health check
    app.get('/api/ping', function (req, res) {
        res.send({message: 'pong!'});
    });

    //add a bill
    app.post('/api/bill', controller.addBill);
};