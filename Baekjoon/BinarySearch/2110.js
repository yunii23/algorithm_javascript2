// 공유기 설치

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, c] = input[0].trim().split(" ").map(Number)
const house = input.splice(1).map(Number).sort((a, b) => a - b)

let left = 0
let right = house[n-1]
let mid

while (left <= right) {
    mid = Math.trunc((left + right) / 2)

    let count = 1
    let prev = house[0]

    for(const cur of house) {
        if (cur - prev < mid) continue
        prev = cur
        count += 1
    }

    if (count < c) right = mid - 1
    else left = mid + 1
}

console.log(right);