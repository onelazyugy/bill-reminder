const reminderService = require("../service/reminder_service");

exports.appointments = function(req, res) {
    res.send(reminderService.getAppointments());
};

exports.appointment = function(req, res) {
    res.send(reminderService.bookAppointment(req.body));
};