// 파도반 수열

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const t = parseInt(input[0])

const dp = new Array(101).fill(0)
dp[1] = 1
dp[2] = 1
dp[3] = 1

function padovan(n) {
    if(dp[n] !== 0) return dp[n]

    return dp[n] = padovan(n-2) + padovan(n-3)
}

for(let i=1; i<=t; i++) {
    const n = parseInt(input[i])

    if(n <= 2) console.log(dp[n]);
    else {
        console.log(padovan(n));
    }
}