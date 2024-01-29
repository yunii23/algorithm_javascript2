// 그대로 출력하기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

for(let i=0; i<input.length; i++) {
    console.log(input[i]);
}