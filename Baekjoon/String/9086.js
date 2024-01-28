// 문자열

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0]);

for(let i=0; i<n; i++) {
    console.log(input[i+1].charAt(0) + input[i+1].charAt(input[i+1].trim().length-1))
}