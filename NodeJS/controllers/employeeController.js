const express = require('express');
let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;

let { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(err) {
            console.log('Error while retrieving employees: ' + JSON.stringify(err, undefined, 2));
            return;
        }
        res.send(docs);
    });
});

router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if(err) {
            console.log('Error while saving the employee: ' + JSON.stringify(err, undefined, 2));
            return;
        }
        res.send(doc);
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Employee.findById(req.params.id, (err, doc) => {
        if(err) {
            console.log('Error while retrieving Employee: ' + JSON.stringify(err, undefined, 2));
            return;
        }

        res.send(doc);
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    let emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if(err) {
            console.log('Error while updating the employee: ' + JSON.stringify(err, undefined, 2));
            return;
        }

        res.send(doc);
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err) {
            console.log('Error while deleting the employee: ' + JSON.stringify(err, undefined, 2));
        }

        res.send(doc);
    });
});

module.exports = router;