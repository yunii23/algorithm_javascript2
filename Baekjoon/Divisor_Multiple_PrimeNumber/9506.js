// 약수들의 합

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

for(let i=0; i<input.length-1; i++) {
    let t = parseInt(input[i]);
    let arr = [];
    let sum = 0;

    for(let j=1; j<t; j++) {
        if(t % j == 0){
            arr.push(j);
            sum += j;
        }
    }

    if(sum == t) {
        let sentence = " =";

        for(let j=0; j<arr.length; j++) {
            if(j == arr.length-1) sentence += " " + arr[j];
            else sentence += " " + arr[j] + " +";
        }
        console.log(t + sentence);
    }
    else {
        console.log(t + " is NOT perfect.")
    }
}