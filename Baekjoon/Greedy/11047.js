// 동전 0

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let [n, k] = input[0].split(" ").map(Number)
const coin = input.slice(1).map(Number)

let count = 0
for(let i=n-1; i>=0; i--) {
    if(coin[i] <= k) {
        count += Math.trunc(k / coin[i])
        k -= coin[i] * Math.trunc(k / coin[i])
    }
}

console.log(count);