// 개수 세기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0]);
const arr = input[1].trim().split(/\s/);
const v = input[2];

let answer = 0;

for(let i=0; i<arr.length; i++) {
    if(arr[i] == v) answer ++;
}

console.log(answer);