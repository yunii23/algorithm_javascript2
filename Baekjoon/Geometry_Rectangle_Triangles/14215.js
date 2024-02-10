// 세 막대

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/).map(Number);
// 제출시 /dev/stdin

let a = input[0];
let b = input[1];
let c = input[2];

if(a == b && b == c) {
    console.log(a * 3);
}
else {
    let max = Math.max(...input);
    let maxIndex = input.indexOf(max);

    if(maxIndex == 0) {
        if(b + c <= a) {
            console.log((2 * b) + (2 * c) - 1);
        }
        else {
            console.log(a + b + c);
        }
    }
    else if(maxIndex == 1) {
        if(a + c <= b) {
            console.log((2 * a) + (2 * c) - 1);
        }
        else {
            console.log(a + b + c);
        }
    }
    else if(maxIndex == 2) {
        if(a + b <= c) {
            console.log((2 * a) + (2 * b) - 1);
        }
        else {
            console.log(a + b + c);
        }
    }
}
