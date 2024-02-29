// 최소공배수

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/).map(Number);
// 제출시 /dev/stdin

let A = input[0];
let B = input[1];

if(A >= B) console.log(lcm(A, B));
else console.log(lcm(B, A));

function gcd (a, b) {
    return a % b == 0 ? b : gcd(b, a % b);
}

function lcm (a, b) {
    return a * b / gcd(a, b);
}