module.exports = function (app) {
    //health check
    app.get('/api/ping', function (req, res) {
        res.send({message: "pong!"});
    });
};