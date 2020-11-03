const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
let employeeController = require('./controllers/employeeController');

let app = express();
app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => {console.log('Server started at port ' + port)});

app.use('/employees', employeeController);