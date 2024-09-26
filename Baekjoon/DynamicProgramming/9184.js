// 신나는 함수 실행

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const dp = new Array(21);
for(let i=0; i<=20; i++) {
    dp[i] = new Array(21);
    for(let j=0; j<=20; j++) {
        dp[i][j] = new Array(21)
        for(let k=0; k<=20; k++) {
            dp[i][j][k] = 0;
        }
    }
}

function w(a, b, c) {
    if(a <= 0 || b <= 0 || c <= 0) return 1;
    if(a > 20 || b > 20 || c > 20) return w(20, 20, 20)
    if(dp[a][b][c] != 0) return dp[a][b][c]
    if(a < b && b < c) return dp[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)
    else return dp[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
}

for(let i=0; i<input.length; i++) {
    const numArr = input[i].split(" ")
    const a = parseInt(numArr[0])
    const b = parseInt(numArr[1])
    const c = parseInt(numArr[2])

    if(a == b && b == c && a == -1) break;

    console.log("w(" + a + ", " + b + ", " + c + ") = " + w(a, b, c));
}
