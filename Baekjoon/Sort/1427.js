// 소트인사이드

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

let n = parseInt(input);
let arr = [];

while (true) {
    if(n < 10) {
        arr.push(n);
        break;
    }

    arr.push(Math.floor(n % 10));
    n = Math.floor(n / 10);
}

arr.sort((a, b) => b - a);

console.log(arr.join(""));