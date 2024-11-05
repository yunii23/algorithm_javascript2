// 나무 자르기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, m] = input[0].split(" ").map(Number)
const tree = input[1].split(" ").map(Number).sort((a, b) => a > b ? 1 : -1) 

let left = 0
let right = tree[n-1]
let mid

while(left <= right) {
    mid = Math.trunc((left + right) / 2)
    
    let h = tree.reduce((acc, cur) => {
        return acc + (cur >= mid ? cur - mid : 0)
    }, 0)

    if(h >= m) left = mid + 1
    else right = mid - 1
}

console.log(right);