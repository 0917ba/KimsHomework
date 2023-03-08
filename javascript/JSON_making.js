const fs = require("fs");
let jsonList = new Array();

for (let i = 1; i <= 4; i++) {
  let k = 0;

  if (i == 3) {
    k = 21;
  } else k = 20;

  for (let j = 1; j <= k; j++) {
    let data = new Object();
    let id = "ishs" + "292" + i + leadingZeros(j, 2);
    let pw = "292" + i + leadingZeros(j, 2) + "!";

    data.id = id;
    data.pw = pw;

    jsonList.push(data);
  }
}

let jsonData = JSON.stringify(jsonList);
fs.writeFileSync("studentInfo.json", jsonData);

function leadingZeros(n, digits) {
  let zero = "";
  n = n.toString();

  if (n.length < digits) {
    for (let i = 0; i < digits - n.length; i++) zero += "0";
  }
  return zero + n;
}
