// 세로읽기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const arr = Array.from(new Array(15), () => new Array(15).fill(-1));

for(let i=0; i<5; i++) {
    let temp = input[i].trim().split("");

    for(let j=0; j<15; j++) {
        arr[i][j] = temp[j]
    }
}

let result = '';

for(let i=0; i<15; i++) {
    for(let j=0; j<15; j++) {
        if(arr[j][i] != -1 && arr[j][i] != undefined) result += arr[j][i];
    }
}

console.log(result);