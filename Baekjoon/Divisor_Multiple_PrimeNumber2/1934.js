// 최소공배수

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let T = parseInt(input[0]);

for(let i=1; i<=T; i++) {
    let temp = input[i].trim().split(" ").map(Number);
    if(temp[0] >= temp[1]) console.log(lcm(temp[0], temp[1]));
    else console.log(lcm(temp[1], temp[0]));
}

function gcd (a, b) {
    return a % b == 0 ? b : gcd(b, a % b);
}

function lcm (a, b) {
    return a * b / gcd(a, b);
}