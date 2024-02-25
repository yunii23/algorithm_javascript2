// 문자열 집합

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let temp = input[0].trim().split(" ").map(Number);
let n = temp[0];
let answer = 0;

let map = new Map();
for(let i=1; i<=n; i++) {
    map.set(input[i], 0);
}

for(let i=n+1; i<input.length; i++) {
    if(map.has(input[i]) == true) answer++;
}

console.log(answer);