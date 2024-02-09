// 직사각형

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a * b);