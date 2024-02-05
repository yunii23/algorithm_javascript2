// 색종이

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const n = parseInt(input[0]);

const arr = Array.from(new Array(100), () => new Array(100).fill(false));

for(let i=1; i<input.length; i++) {
    let temp = input[i].trim().split(" ");
    let x = parseInt(temp[0]); // 열
    let y = parseInt(temp[1]); // 행
    
    for(let j=y; j<y+10; j++) {
        for(let k=x; k<x+10; k++) {
            arr[j][k] = true;
        }
    }
}

let sum = 0;
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
        if(arr[i][j] == true) {
            sum++;
        } 
    }
}

console.log(sum);