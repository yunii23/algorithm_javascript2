// 수학은 비대면강의입니다

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/).map(Number);
// 제출시 /dev/stdin

let a = input[0];
let b = input[1];
let c = input[2];
let d = input[3];
let e = input[4];
let f = input[5];

for(let i=-999; i<1000; i++) {
    for(let j=-999; j<1000; j++) {
        if((a * i + b * j == c) && (d * i + e * j == f)) {
            console.log(i + " " + j);
        }
    }
}
