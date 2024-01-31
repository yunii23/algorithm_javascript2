// 팰린드롬인지 확인하기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

let word = [...input];
let j = word.length - 1;
let answer = 1;

// 홀수
if(word.length % 2 != 0) {
    for(let i=0; i<word.length/2; i++) {
        if(word[i] != word[j]) {
            answer = 0;
            break;
        }
        j--;
    }
}
// 짝수
else {
    for(let i=0; i<word.length/2; i++) {
        if(word[i] != word[j]) {
            answer = 0;
            break;
        }
        j--;
    }
}

console.log(answer);