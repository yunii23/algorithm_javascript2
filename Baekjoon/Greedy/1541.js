// 잃어버린 괄호

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().match(/(\d+|[+\-])/g);
// 제출시 /dev/stdin

let minus = false
let result = 0
for(let i=0; i<input.length; i++) {
    if(input[i] === '-') {
        minus = true
        continue
    }
    if (!isNaN(input[i])) {
        let num = parseInt(input[i])
        if(minus) {
            result -= num
        }
        else result += num
    }
}

console.log(result);