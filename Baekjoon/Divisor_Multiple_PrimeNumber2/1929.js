// 소수 구하기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\s/).map(Number);
// 제출시 /dev/stdin

let arr = new Array(input[1] + 1).fill(false);

arr[0] = true;
arr[1] = true;

for(let i=2; i<arr.length; i++) {

    if(arr[i] == true) continue;

    for(let j=i*i; j<arr.length; j+=i) {
        arr[j] = true;
    }
}

for(let i=input[0]; i<=input[1]; i++) {
    if(arr[i] == false) console.log(i);
}