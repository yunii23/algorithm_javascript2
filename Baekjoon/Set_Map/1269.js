// 대칭 차집합

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let A = input[1].trim().split(" ").map(Number);
let B = input[2].trim().split(" ").map(Number);
let AB = [];
let BA = [];
A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

for(let i=0; i<A.length; i++) {
    if(binarySearch(B, A[i]) == false) AB.push(A[i]);
}

for(let i=0; i<B.length; i++) {
    if(binarySearch(A, B[i]) == false) BA.push(B[i]);
}

console.log(AB.length + BA.length);

function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;

    while (left <= right) {
        mid = parseInt((left + right) / 2);
        if(target == arr[mid]) return true;
        else if(target < arr[mid]) right = mid - 1;
        else if(target > arr[mid]) left = mid + 1;
    }
    return false;
}


// 시간 초과

// let AB = A.filter(x => !B.includes(x));
// let BA = B.filter(x => !A.includes(x));

// console.log(AB.length + BA.length);