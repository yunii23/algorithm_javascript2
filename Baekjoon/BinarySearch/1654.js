// 랜선 자르기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [k, n] = input[0].split(" ").map(Number)
const lan = input.splice(1).map(Number).sort((a, b) => a > b ? 1 : -1)

let left = 1
let right = lan[k-1]
let mid

while (left <= right) {
    mid = Math.trunc((left + right) / 2)

    let count = lan.reduce((acc, cur) => {
        return acc + parseInt(cur / mid)
    }, 0)

    if (count >= n) left = mid + 1
    else right = mid - 1
}

console.log(right);