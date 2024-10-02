// RGB 거리

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0])
const dp = new Array(n)
for(let i=0; i<dp.length; i++) {
    dp[i] = new Array(3);
    for(let j=0; j<3; j++) {
        dp[i][j] = 0;
    }
}

const arr = input[1].split(" ").map(Number)
dp[0][0] = arr[0]
dp[0][1] = arr[1]
dp[0][2] = arr[2]

function rgb(r, g, b, idx) {
    dp[idx][0] = r + Math.min(dp[idx-1][1], dp[idx-1][2])
    dp[idx][1] = g + Math.min(dp[idx-1][0], dp[idx-1][2])
    dp[idx][2] = b + Math.min(dp[idx-1][0], dp[idx-1][1])
}

// 연속해서 같은 색을 칠하면 안 됨
for(let i=2; i<input.length; i++) {
    const color = input[i].split(" ").map(Number)

    rgb(color[0], color[1], color[2], i-1)
}

console.log(Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2]));
