const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const Info = require('./javascript/user');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));

app.set('view engine', 'ejs');


let userData = new Object();

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('index', {'isLoginFailed' : 0});
});

app.post("/login", (req, res) => {
    console.log('login');

    if(Info.isInfoProper(req.body)) {
        userData.id = req.body.id;
        userData.pw = req.body.password;
        res.redirect('/main');

    } else {
        console.log('아이디 또는 비밀번호가 잘못되었습니다.');
        res.render('index', {'isLoginFailed' : 1});
    }
});

app.get('/main', (req, res) => {
    Info.addBooksInJSON('블랙라벨', './images/blacklabel');
    Info.addBooksInJSON('블랙라벨', './images/blacklabel');
    res.render('main');
});

app.listen(3000, (err) => {
    console.log("The server is listening on port 3000");
});
