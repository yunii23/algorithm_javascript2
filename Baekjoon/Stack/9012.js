// 괄호

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const t = parseInt(input[0])
const ps = input.splice(1)

const answer = new Array(t).fill("YES")
for(let i=0; i<ps.length; i++) {
    const temp = ps[i].trim()
    const stack = []

    for(let j=0; j<temp.length; j++) {
        if (temp[j] == '(') stack.push('(')
        else {
            if (stack.length == 0) {
                answer[i] = "NO"
                break
            }
            stack.pop()
        }
    }
    if (stack.length != 0) answer[i] = "NO"
}

console.log(answer.join("\n"));