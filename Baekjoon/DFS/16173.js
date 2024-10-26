// 점프왕 쩰리

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0])
const board = Array.from(new Array(n), () => new Array(n).fill(0))

for(let i = 1; i < input.length; i++) {
    [board[i-1][0], board[i-1][1], board[i-1][2]] = input[i].split(" ").map(Number)
}

function dfs (x = 0, y = 0) {
    const dist = board[x][y]

    // 도착
    if (dist === -1) return true

    // 0
    if (dist === 0) return false

    // 오른쪽
    if (x + dist < n) {
        const result = dfs(x + dist, y)
        if (result) return true
    }

    // 아래
    if ( y + dist < n) {
        const result = dfs(x, y + dist)
        if (result) return true
    }

    return false
}

console.log(dfs() ? 'HaruHaru' : 'Hing');