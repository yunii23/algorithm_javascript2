// 코딩은 체육과목 입니다

const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim();
// 제출시 /dev/stdin

let answer = '';
let n = parseInt(input);

for(let i=0; i<n/4; i++) {
    answer += 'long '
}

answer += 'int';

console.log(answer)