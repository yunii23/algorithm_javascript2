// 진법 변환

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/);
// 제출시 /dev/stdin

let n = input[0];
let b = input[1];

console.log(parseInt(n, b));
