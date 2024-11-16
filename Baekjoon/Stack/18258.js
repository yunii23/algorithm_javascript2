// 큐 2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const queue = []
const answer = []
let idx = 0

for (let i=1; i<input.length; i++) {
    let s = input[i].trim().split(" ")

    if (s[0] == "push") queue.push(s[1])
    else if (s[0] == "pop") {
        if (queue.length - idx == 0) answer.push(-1)
        else {
            answer.push(queue[idx])
            idx++
        }
    }
    else if (s[0] == "size") answer.push(queue.length - idx)
    else if (s[0] == "empty") {
        if (queue.length - idx == 0) answer.push(1)
        else answer.push(0)
    }
    else if (s[0] == "front") {
        if (queue.length - idx == 0) answer.push(-1)
        else answer.push(queue[idx])
    }
    else if (s[0] == "back") {
        if (queue.length - idx == 0) answer.push(-1)
        else answer.push(queue[queue.length-1])
    }
}

console.log(answer.join("\n"));