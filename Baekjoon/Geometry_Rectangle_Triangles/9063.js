// 대지

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);

if(n == 1) console.log(0);
else {
    let maxX = -10000;
    let maxY = -10000;
    let minX = 10000;
    let minY = 10000;
    for(let i=1; i<=n; i++) {
        let temp = input[i].trim().split(" ");

        let x = parseInt(temp[0]);
        let y = parseInt(temp[1]);

        if(maxX < x) maxX = x;
        if(maxY < y) maxY = y;
        if(minX > x) minX = x;
        if(minY > y) minY = y
    }

    console.log(Math.abs((maxX - minX) * (maxY - minY)));
}