// 균형잡힌 세상

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const answer = []
for (let i=0; i<input.length; i++) {
    if (input[i] == ".") break

    const stack = []
    const temp = input[i]
    for(let j=0; j<temp.length; j++) {
        if (temp[j] == '(') stack.push("(")
        else if (temp[j] == '[') stack.push("[")
        else {
            if (temp[j] == ")" || temp[j] == "]") {
                let p = stack[stack.length - 1]

                if (p == "(" && temp[j] == ")") stack.pop()
                else if (p == "[" && temp[j] == "]") stack.pop()
                else if (p == undefined) {
                    stack.push(")")
                    break
                }
                else break
            }
        }
    }

    if (stack.length === 0) answer.push("yes")
    else answer.push("no")
}

console.log(answer.join("\n"));