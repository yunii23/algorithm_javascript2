// 중앙 이동 알고리즘

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

let n = parseInt(input);

// 0 - 4 (2) +0 
// 1 - 9 (3) +1 (0승)
// 2 - 25 (5) +2 (1승)
// 3 - 81 (9) +4 (2승)
// 4 - 289 (17) +8 (3승)
// 5 - 1089 (33) +16 (4승)

let num = 3;
let count = 1;

for(let i=1; i<n; i++) {
    count *= 2;
    num += count;
}

console.log(Math.pow(num, 2));