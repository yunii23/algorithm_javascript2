// 구간 합 구하기4

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, m] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
const sum = new Array(n+1).fill(0)

for(let i=1; i<=n; i++) {
    sum[i] = sum[i-1] + arr[i-1]
}

let result = []
for(let i=2; i<m+2; i++) {
    const [j, k] = input[i].split(" ").map(Number)

    result.push(sum[k] - sum[j-1]);
}

console.log(result.join('\n'));