// 이항 계수 1

const fs = require('fs');
const [n, k] = fs.readFileSync("example.txt").toString().trim().split(/\s/).map(Number);
// 제출시 /dev/stdin

function factorial(n) {
    if(n === 0 || n === 1) return 1

    return n * factorial(n-1)
}

console.log(Math.round(factorial(n) / (factorial(k) * factorial(n - k))));