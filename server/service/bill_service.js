const fs = require('fs');
const _ = require('lodash');
const billFilePath = process.env.NODE_ENV === 'prod' ? './server/data/prod/bill.json' : './server/data/localhost/bill.json';

exports.addBill = function(bill, done) {
    let response = {success: false, message: ''};
    fs.readFile(billFilePath, 'utf8', function(err, data) {
        if(err) {
            response.success = false;
            response.message = err;
            done(response);
        } else {
            let jsonData = JSON.parse(data);
            jsonData.push(bill);
            fs.writeFile(billFilePath, JSON.stringify(jsonData, null, 2), 'utf8', function(err) {
                if(err) {
                    response.success = false;
                    response.message = err;
                    done(response);
                } else {
                    // let's pull the entire data from the file
                    fs.readFile(billFilePath, 'utf8', function(err, bills) {
                        if(err) {
                            response.success = false;
                            response.message = err;
                            done(response);
                        } else {
                            response.success = true;
                            response.message = 'success';
                            response.bills = JSON.parse(bills);;
                            done(response);
                        }
                    });
                }
            });
        }
    });
};

exports.getBills = function(done) {
    let response = {success: false, message: ''};
    fs.readFile(billFilePath, 'utf8', function(err, bills) {
        if(err) {
            response.success = false;
            response.message = err;
            done(response);
        } else {
            response.success = true;
            response.message = 'success';
            response.bills = JSON.parse(bills);;
            done(response);
        }
    });
};