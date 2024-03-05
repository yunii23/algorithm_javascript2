// 베르트랑 공준

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/).map(Number);
// 제출시 /dev/stdin

let len = 123456 * 2 + 1;
let arr = new Array(len).fill(false);

for(let i=0; i<input.length-1; i++) {
    let count = 0;

    arr[0] = true;
    arr[1] = true;

    if(input[i] == 1) console.log(input[i]);
    else {
        for(let j=2; j<=input[i]*2; j++) {

            if(arr[j] == true) continue;

            for(let k=j*j; k<=input[i]*2; k+=j) {
                arr[k] = true;
            }
        }

        for(let j=input[i]+1; j<=input[i]*2; j++) {
            if(arr[j] == false) count++;
        }
        console.log(count);
    }
}