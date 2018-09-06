const billService = require('../service/bill_service');

exports.addBill = function(req, res) {
    billService.addBill(req.body, function(response) {
        res.send(response);
    });    
};

exports.getBills = function(req, res) {
    billService.getBills(function(response) {
        if(response && response.success) {
            res.status(200);
            res.send(response);
        } else {
            res.status(500);
            res.send(response);
        }
    });
}