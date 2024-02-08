// 세탁소 사장 동혁

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let t = parseInt(input[0]);

for(let i=1; i<=t; i++) {
    let temp = input[i] / 100;
    let result = '';
    let answer = '';
    
    result = parseInt(temp / 0.25);
    answer = result + " ";
    temp -= result * 0.25;
    temp = temp.toFixed(2);

    result = parseInt(temp / 0.10);
    answer += result + " ";
    temp -= result * 0.10;
    temp = temp.toFixed(2);

    result = parseInt(temp / 0.05);
    answer += result + " ";
    temp -= result * 0.05;
    temp = temp.toFixed(2);

    result = parseInt(temp / 0.01);
    answer += result;
    temp -= result * 0.01;
    temp = temp.toFixed(2);

    console.log(answer);
}