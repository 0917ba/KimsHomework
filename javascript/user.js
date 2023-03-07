const fs = require("fs");


exports.isInfoProper = (getInfo) => {
    userID = getInfo.id;
    userPW = getInfo.password;

    let isExist = false;
    let data =  fs.readFileSync("./studentInfo.json", "UTF-8");

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