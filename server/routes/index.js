const ping = require('./reminder_routes');

module.exports = function (app) {
    ping(app);
};