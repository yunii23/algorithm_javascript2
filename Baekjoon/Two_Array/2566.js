// 최댓값

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let rows = 1;
let columns = 1;
let maxValue = 0;

for(let i=0; i<input.length; i++) {
    let temp = input[i].trim().split(" ");
    temp = temp.map((item) => parseInt(item));

    let value = Math.max(...temp);

    if(maxValue < value) {
        rows = i + 1;
        columns = temp.indexOf(value) + 1;
        maxValue = value;
    }
}

console.log(maxValue);
console.log(rows + " " + columns);
