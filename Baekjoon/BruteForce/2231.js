// 분해합

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

let n = parseInt(input);

for(let i=1; i<=n; i++) {
    let sum = i;
    let k = i;

    while(k > 9) {
        sum += k % 10;
        k = parseInt(k / 10);
    }
    
    sum += k;
    
    if(sum == n) {
        console.log(i);
        break;
    }

    // 생성자가 없을 때
    if(i == n) {
        console.log(0);
    }
}
