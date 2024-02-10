// 삼각형 외우기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if(a == b && b == c && a == 60) {
    console.log("Equilateral");
}
else if(a + b + c == 180 && (a == b || a == c || b == c)) {
    console.log("Isosceles");
}
else if(a + b + c == 180 && (a != b && a != c && b != c)) {
    console.log("Scalene");
}
else {
    console.log("Error");
}