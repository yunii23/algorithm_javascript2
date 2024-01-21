// 꼬마 정민

const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split(" ");
// 제출시 /dev/stdin

let [ A, B, C ] = input.map(num => Number(num))
console.log( A + B + C);