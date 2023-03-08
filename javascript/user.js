const { json } = require("body-parser");
const exp = require("constants");
const fs = require("fs");


exports.isInfoProper = (getInfo) => {
    userID = getInfo.id;
    userPW = getInfo.password;

    let isExist = false;
    let data =  fs.readFileSync("./data/studentInfo.json", "UTF-8");

    let parsedData = JSON.parse(data);
    let jsonLength = parsedData.length;

    for(let i = 0; i < jsonLength; i++) {
        if(userID == parsedData[i].id && userPW == parsedData[i].pw) {
            isExist = true;
            break;
        }
    }
    
    return isExist;
}

exports.isBookExists = (bookName) => {
    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);

    let bookExists = -1
    let jsonLength = parsedData.length;

    for(let i = 0; i < jsonLength; i++) {
        if(parsedData[i].name == bookName) {
            bookExists = i;
            break;
        }
    }

    return bookExists + 1; //찾으면 1 이상, 못찾으면 0
}

exports.addBooksInJSON = (bookName, imagePath) => {
    if(this.isBookExists(bookName)) {
        return;
    }

    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);

    let newBook = {};
    newBook.name = bookName;
    newBook.path = imagePath;
    parsedData.push(newBook);

    let editedData = JSON.stringify(parsedData);
    fs.writeFileSync('data/bookInfo.json', editedData);
}

exports.deleteBooksInJSON = (bookName) => {
    if(!this.isBookExists(bookName)) {
        return;
    }

    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);

    let filteredData = parsedData.filter((element) => {
        element.name != bookName;
    })

    let editedData = JSON.stringify(filteredData);
    fs.writeFileSync('data/bookInfo.json', editedData);
}

exports.addCommentInBook = (bookName, comment) => {
    let data = fs.readFileSync("./data/bookInfo.json", "UTF-8");
    let parsedData = JSON.parse(data);
}