// 베라의 패션

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const n = parseInt(input)

console.log(n * (n - 1));