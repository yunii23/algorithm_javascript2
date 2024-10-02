// 서로 다른 부분 문자열의 개수

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const map = new Map()

let i = 1;

while (i <= input.length) {
    for(let j=0; j<input.length; j++) {
        map.set(input.substring(j, i+j))
    }
    i++
}

console.log(map.size);
