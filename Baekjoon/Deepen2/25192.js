// 인사성 밝은 곰곰이

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0])
const arr = input.splice(1)

let answer = 0

const chat = new Set()
for(let i=0; i<n; i++) {
    arr[i] = arr[i].trim()
    if (arr[i] == "ENTER") {
        chat.clear()
    }
    else {
        if (!chat.has(arr[i])) {
            answer++
            chat.add(arr[i])
        }
    }
}

console.log(answer);