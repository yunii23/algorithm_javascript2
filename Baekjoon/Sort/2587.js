// 대표값2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/).map(Number);
// 제출시 /dev/stdin

let sum = 0;
for(let i=0; i<5; i++) {
    sum += input[i];
}

input.sort();

console.log(parseInt(sum / 5));
console.log(input[2]);