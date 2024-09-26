// 알고리즘 수업 - 피보나치 수 1

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

function fib(n) {
    if(n == 0) return 0
    if(n == 1) return 1
    return fib(n-1) + fib(n-2)
}

const inputNum = parseInt(input)

console.log(fib(input) + " " + (inputNum - 2));
