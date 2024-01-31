// 너의 평점은

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const grade = {
    "A+" : 4.5,
    "A0" : 4.0,
    "B+" : 3.5,
    "B0" : 3.0,
    "C+" : 2.5,
    "C0" : 2.0,
    "D+" : 1.5,
    "D0" : 1.0,
    "F" : 0.0
}

let result = 0;
let grede_sum = 0.0;

for(let i=0; i<input.length; i++) {
    let temp = input[i].trim().split(" ");

    if(temp[2] != "P") {
        grede_sum += parseFloat(temp[1]);
        result += temp[1] * grade[temp[2]];

    }
}

console.log(result / grede_sum);