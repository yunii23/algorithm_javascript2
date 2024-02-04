// 진법 변환2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let b = input[1];

console.log(n.toString(b).toUpperCase());
