// 별 찍기 - 7
// 참고 https://aiday.tistory.com/114

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const n = parseInt(input);

/*
6 -> 12-1 = 11
5 -> 10-1 = 9
4 -> 8-1 = 7
3 -> 6-1 = 5
2 -> 4-1 = 3
1 -> 2-1 = 1
*/

for(let i=1; i<n; i++) {
    let blank = ' '.repeat(n-i);
    let star = '*'.repeat(i+(i-1));
    console.log(blank + star);
}

for(let i=n; i>0; i--) {
    let blank = ' '.repeat(n-i);
    let star = '*'.repeat(i+(i-1));
    console.log(blank + star);
}