const reminderService = require('../service/reminder_service');

exports.addBill = function(req, res) {
    res.send(reminderService.addBill(req.body));
};