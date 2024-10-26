// 녹색거탑

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const n = parseInt(input)

console.log(Math.pow(2, n));