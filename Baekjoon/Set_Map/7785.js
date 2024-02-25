// 회사에 있는 사람

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let map = new Map();
let answer = [];

for(let i=1; i<input.length; i++) {
    let temp = input[i].trim().split(" ");
    map.set(temp[0], temp[1]);
}

for(let [k, v] of map) {
    if(v == "enter") answer.push(k);
}

answer.sort((a, b) => a > b ? -1 : 1);
console.log(answer.join("\n"));