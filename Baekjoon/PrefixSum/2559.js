// 수열

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, k] = input[0].split(" ").map(Number)
const temp = input[1].split(" ").map(Number)
const sum = new Array(n+1).fill(0)

for(let i=1; i<=temp.length; i++) {
    sum[i] = sum[i-1] + temp[i-1]
}

const result = []
for(let i=n; i>k-1; i--) {
    result.push(sum[i] - sum[i-k])
}

console.log(Math.max(...result));