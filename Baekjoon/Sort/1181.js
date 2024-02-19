// 단어 정렬

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let arr = input.slice(1);

let set = new Set(arr);
let newArr = [...set];

newArr.sort((a, b) => {
    if(a.length == b.length) return a > b ? 1 : -1;
    else if(a.length != b.length) {
        if(a.length > b.length) return 1;
        else return -1;
    }
})

let answer = '';
for(let i=0; i<newArr.length; i++) {
    answer += newArr[i] + "\n";
}

console.log(answer);