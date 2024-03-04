// 분수 합

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let arr = [];
for(let i=0; i<2; i++) {
    let temp = input[i].trim().split(" ").map(Number);
    arr.push(temp[0]);
    arr.push(temp[1]);
}

let a = arr[0] * arr[3] + arr[1] * arr[2]; // 분자
let b = arr[1] * arr[3]; // 분모

while(true) {
    let value = gcd(a, b);

    if(value == 1) break;
    else {
        a /= value;
        b /= value;
    }
}

function gcd(a, b) {
    return a % b == 0 ? b : gcd(b, a % b)
}

console.log(a + " " + b);