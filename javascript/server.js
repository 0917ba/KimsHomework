const express = require("express");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const Info = require('./user');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));


let userData = new Object();


app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/index.html', 'UTF-8', (err, data) => {
        res.write(data);
        res.end();
    });
});


app.post("/login", (req, res) => {
    console.log('login');

    if(Info.isInfoProper(req.body)) {
        userData.id = req.body.id;
        userData.pw = req.body.password;

        res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.readFile('./html/success.html', 'UTF-8', (err, data) => {
            res.write(data);
            res.end();
        });

    } else {
        console.log('아이디 또는 비밀번호가 잘못되었습니다.');
        res.redirect('/');
    }
});


app.listen(3000, (err) => {
    console.log("The server is listening on port 3000");
});
