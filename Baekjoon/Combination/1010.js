// 다리 놓기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

function factorial(n) {
    if(n === 0 || n === 1) return 1

    return n * factorial(n-1)
}

for(let i = 1; i < input.length; i++) {
    let [l, r] = input[i].split(" ").map(Number)

    console.log(Math.round(factorial(r) / (factorial(l) * factorial(r - l))))
}