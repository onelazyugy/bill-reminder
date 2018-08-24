let reminder = require("../model/reminder");
const _ = require("lodash");

exports.getAppointments = function() {
    return reminder;
};

exports.bookAppointment = function(appointment) {
    const index = _.findIndex(reminder.slots, {id: parseInt(appointment.id)});
    let isSuccess = false;
    if(index !== -1) {
        isSuccess = true;
        reminder.slots.map((slot)=>{
            if(slot.id === parseInt(appointment.id)) {
                slot.isSlotTaken = true;
                slot.name = appointment.name;
                slot.phone = appointment.phone;
            }
        });
    }
    return {isSuccess: isSuccess};
}