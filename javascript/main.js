const express = require("express");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/index.html', 'UTF-8', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.post("/login", (req, res) => {
    console.log('login');
    userID = req.body.id;
    userPW = req.body.password;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    fs.readFile('./html/success.html', 'UTF-8', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.listen(3000, (err) => {
    console.log("The server is listening on port 3000");
});
