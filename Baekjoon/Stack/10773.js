// 제로

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const arr = input.splice(1).map(Number)

const stack = []
for(let i=0; i<arr.length; i++) {
    if(arr[i] === 0) stack.pop()
    else stack.push(arr[i])
}

let result = stack.reduce((acc, cur) => {
    return acc + cur
}, 0)

console.log(result);