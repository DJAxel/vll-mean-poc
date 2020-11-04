const express = require('express');
let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;

router.get('/upload', (req, res) => {
    res.render('upload');
});

module.exports = router;