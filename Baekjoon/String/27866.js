// 문자와 문자열

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const s = input[0];
const i = parseInt(input[1]);

console.log(s.charAt(i-1));