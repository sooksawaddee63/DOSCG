const fs = require('fs');
const express = require('express');
const app = express();

app.use('/', (req, res) => {
    
    // **modify your existing code here**
    fs.readFile('google_map.json', (err, data) => {
    
        res.end(data);
    });
});

app.listen(5555);

