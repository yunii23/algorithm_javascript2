// 도키도키 간식드리미

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0])
const student = input[1].split(" ").map(Number)

const stack = []
let current = 1
let answer = ""

for (let i=0; i<n; i++) {
    if (student[i] === current) current++

    for (let j=stack.length-1; j>=0; j--) {
        if (stack[j] === current) {
            current++
            stack.pop()
        }
        else break
    }
    
    if (student[i] > current) stack.push(student[i])
}

if (current-1 === n) answer = "Nice"
else answer = "Sad"

console.log(answer);