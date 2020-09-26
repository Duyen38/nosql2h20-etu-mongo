const path = require('path');
const Employee = require('../models/employee');

exports.index = function(req, res) {
    Employee.find({}).exec(function(err, employees) {
        if (err) {
            return res.send(500, err);
        }
        res.render('employees', {
            employees: employees
        });
    });
};

exports.create = function(req, res) {
    // TODO: validate information in request
    var newEmployee = new Employee(req.body);
    console.log(req.body);
    newEmployee.save(function(err) {
        if (err) {
            res.status(400).send('Unable to save employee to database');
        } else {
            res.redirect('/employees');
        }
    });
};

// exports.list = function(req, res) {
//     Employee.find({}).exec(function(err, employees) {
//         if (err) {
//             return res.send(500, err);
//         }
//         res.render('getemployees', {
//             employees: employees
//         });
//     });
// };