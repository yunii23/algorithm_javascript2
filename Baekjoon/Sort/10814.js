// 나이순 정렬

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let arr = Array.from(new Array(n), () => new Array(2).fill(0));

for(let i=0; i<n; i++) {
    let temp = input[i+1].trim().split(" ");
    arr[i][0] = parseInt(temp[0]);
    arr[i][1] = temp[1];
}

arr.sort((a, b) => {
    if(a[0] != b[0]) return a[0] - b[0];
})

for(let i=0; i<arr.length; i++) {
    console.log(arr[i][0] + " " + arr[i][1]);
}