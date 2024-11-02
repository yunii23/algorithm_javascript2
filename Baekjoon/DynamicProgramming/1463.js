// 1로 만들기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const x = parseInt(input)
const dp = new Array(x+1).fill(Infinity)
dp[0] = 0
dp[1] = 0

for(let i=2; i<=x; i++) {
    dp[i] = dp[i-1] + 1

    if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i/3]+1)
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i/2]+1)
}

console.log(dp[x]);