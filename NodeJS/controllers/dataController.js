const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.get('/upload', (req, res) => {
    res.render('upload');
});

app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let file = req.files.sampleFile;
    const supportedMimetypes = ["application/json"];
    if(supportedMimetypes.indexOf(file.mimetype) <= -1) {
        return res.status(400).send("Mimetype '"+file.mimetype+"' is not supported!");
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    
    res.send('File uploaded!');
});

module.exports = app;