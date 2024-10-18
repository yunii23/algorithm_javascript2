// 창문닫기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

function open_window() {
    let count = 0
    for(let i=1; i*i <= parseInt(input); i++) {
        count++
    }
    return count
}
    
console.log(open_window(parseInt(input)));