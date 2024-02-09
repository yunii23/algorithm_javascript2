// 수학은 체육과목 입니다

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

// 1 - 4
// 2 - 8
// 3 - 12

console.log(4 * parseInt(input));