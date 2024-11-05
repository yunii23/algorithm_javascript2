// ATM

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0])
const time = input[1].split(" ").map(Number).sort((a, b) => a > b ? 1 : -1)
const sum = new Array(n).fill(0)
sum[0] = time[0]

let result = sum[0]
for(let i=1; i<n; i++) {
    sum[i] = sum[i-1] + time[i]
    result += sum[i]
}

console.log(result);