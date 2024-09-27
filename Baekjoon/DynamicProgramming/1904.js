// 01 타일

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const n = parseInt(input)

function tile(num) {
    const MOD = 15746; // 결과를 나누는 값
    const dp = new Array(num+1).fill(0)

    dp[1] = 1 // 1자리 수열
    if (num > 1) dp[2] = 2 // 2자리 수열

    for(let i=3; i<=num; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % MOD;
    }

    return dp[num]
}

console.log(tile(n));
