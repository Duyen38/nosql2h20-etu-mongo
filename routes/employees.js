const express = require('express');
const router = express.Router();
const employees_controller = require('../controllers/employees');

router.get('/', function(req, res) {
    employees_controller.index(req, res);
});

router.post('/add', function(req, res) {
    employees_controller.create(req, res);
});

router.get('/get', function(req, res) {
    employees_controller.list(req, res);
});

module.exports = router;