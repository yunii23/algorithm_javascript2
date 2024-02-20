// 좌표 압축

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let arr = input[1].trim().split(" ").map(Number);
let answer = new Array(n).fill(0);

let set = new Set(arr);
let temp = [...set];
temp.sort((a, b) => a - b);

for(let i=0; i<arr.length; i++) {
    let left = 0;
    let right = temp.length - 1;
    let mid = 0;

    while(left <= right) {
        mid = parseInt((left + right) / 2);
        if(arr[i] == temp[mid]) {
            answer[i] = mid;
            break;
        }
        else if (temp[mid] < arr[i]) left = mid + 1;
        else if (temp[mid] > arr[i]) right = mid - 1;
    }
}

console.log(answer.join(" "));


// <시간 초과>

// let set = new Set(arr);
// let temp = [...set];
// temp.sort((a, b) => a - b);

// for(let i=0; i<arr.length; i++) {
//     let idx = temp.indexOf(arr[i]);
//     answer[i] = idx;
// }

// console.log(answer.join(" "));
// -------------


// <시간 초과>

// let set = new Set(arr);
// let temp = [...set];

// for(let i=0; i<arr.length; i++) {
//     for(let j=0; j<temp.length; j++) {
//         if(arr[i] > temp[j]) answer[i] ++;
//     }
// }

// console.log(answer.join(" "));
// -------------


// <메모리 초과>

// for(let i=0; i<arr.length; i++) {
//     let temp = [...arr];
//     temp.splice(i, 1);
//     let set = new Set(temp);
//     let after = [...set];

//     for(let j=0; j<after.length; j++) {
//         if(arr[i] > after[j]) answer[i]++;
//     }
// }

// console.log(answer.join(" "));