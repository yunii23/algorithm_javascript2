// 스택2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let stack = [];
let answer = [];

for(let i=1; i<input.length; i++) {
    let temp = input[i].trim().split(" ");

    if(temp[0] == 1) stack.push(temp[1]);
    else if(temp[0] == 2) {
        let value = stack.pop()

        if(value == undefined) answer.push(-1);
        else answer.push(value);
    }
    else if(temp[0] == 3) answer.push(stack.length);
    else if(temp[0] == 4) {
        if(stack.length == 0) answer.push(1);
        else answer.push(0);
    }
    else if(temp[0] == 5) {
        let value = stack.length - 1;

        if(stack[value] == undefined) answer.push(-1);
        else answer.push(stack[value]);
    }
}

console.log(answer.join("\n"));