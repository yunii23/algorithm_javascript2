// 카드2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const n = parseInt(input)

const queue = Array.from({length : n}, (_, i) => i+1)

let front = 0
while (front < queue.length - 1) {
    front++
    queue.push(queue[front])
    front++
}

console.log(queue[front]);