const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
let employeeController = require('./controllers/employeeController');
let dataController = require('./controllers/dataController');

let app = express();
// app.use(bodyParser.json());
app.set('view engine', 'ejs');

const port = 3000;
app.listen(port, () => {console.log('Server started at port ' + port)});

app.use('/employees', employeeController);
app.use('/data', dataController);