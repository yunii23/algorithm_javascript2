// 수 정렬하기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/).map(Number);
// 제출시 /dev/stdin

let n = input[0];
let arr = [];

for(let i=1; i<=n; i++) {
    arr.push(input[i]);
}

arr.sort((a, b) => a - b);

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}