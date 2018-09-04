const bill = require('../model/bill');
const fs = require('fs');
const _ = require('lodash');

exports.addBill = function(bill) {
    let response = {success: false, message: ''};
    //read file
    fs.readFile('./server/data/bill.json', 'utf8', function(err, data) {
        if(err) {
            response.success = false;
            response.message = err;
            return response;
        } else {
            let jsonData = JSON.parse(data);
            jsonData.push(bill);
            fs.writeFile('./server/data/bill.json', JSON.stringify(jsonData, null, 2), 'utf8', function(err) {
                if(err) {
                    throw err;
                } else {
                    response.success = true;
                    response.message = 'success';
                }
            });
        }
        return response;
    });
}