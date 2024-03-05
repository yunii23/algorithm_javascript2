// 다음 소수

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/).map(Number);
// 제출시 /dev/stdin

let n = input[0];

for(let i=1; i<input.length; i++) {

    while (true) {
        if(is_prime(input[i]) == true) break;
        input[i]++;
    }

    console.log(input[i]);
}

function is_prime(num) {
    if(num < 2) return false;
    if(num == 2) return true;
    
    for(let i=2; i<= Math.sqrt(num); i++) {
        if(num % i == 0) return false;
    }
    return true;
}

// 배열 범위 초과

// for(let i=1; i<=input.length; i++) {
//     let arr = new Array(input[1]+1);

//     arr[0] = true;
//     arr[1] = true;

//     while(true) {
//         for(let j=2; j<arr.length; j++) {
//             if(arr[j] == true) continue;
    
//             for(let k=j*j; k<arr.length; k+=j) {
//                 arr[k] = true;
//             }
//         }

//         if(arr[arr.length-1] == true) {
//             console.log(arr.length-1);
//             break;
//         }
//         else arr.push(false)
//     }
// }