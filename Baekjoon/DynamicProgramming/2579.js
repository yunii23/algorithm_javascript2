// 계단 오르기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/).map(Number);
// 제출시 /dev/stdin

const n = input.splice(0, 1)
const dp = new Array(n).fill(0)

function step() {
    dp[0] = input[0]
    dp[1] = input[0] + input[1]
    dp[2] = Math.max(input[0], input[1]) + input[2]

    for(let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i-2] + input[i], dp[i-3] + input[i-1] + input[i])
    }

    return dp[n-1]
}

console.log(step());