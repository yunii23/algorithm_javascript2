// 약수 구하기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let k = parseInt(input[1]);

let arr = [];

for(let i=1; i<=n; i++) {
    if(n % i == 0) arr.push(i);   
}

if(arr[k-1] == undefined) console.log(0);
else console.log(arr[k-1]);