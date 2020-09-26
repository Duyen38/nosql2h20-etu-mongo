const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const main_routes = require('./routes/index')
const employees = require('./routes/employees');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/', employees);
app.use('/employees', employees);

app.listen(port, function() {
    console.log('Example app listening on port 8080!')
})