// 블랙잭

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let temp = input[0].trim().split(" ").map(Number);
let n = temp[0];
let m = temp[1];

let arr = input[1].trim().split(" ").map(Number);

let max = 0;
for(let i=0; i<arr.length-2; i++) {
    for(let j=i+1; j<arr.length-1; j++) {
        for(let k=j+1; k<arr.length; k++) {
            let sum = arr[i] + arr[j] + arr[k];
            
            if(max < sum && sum <= m) {
                max = sum;
            }
        }
    }
}

console.log(max);