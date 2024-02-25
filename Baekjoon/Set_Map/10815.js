// 숫자 카드

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let m = parseInt(input[2]);

let card = input[1].trim().split(/\s/).map(Number);
let arr = input[3].trim().split(/\s/).map(Number);
let answer = [];
card.sort((a, b) => a - b);

for(let i=0; i<arr.length; i++) {
    answer.push(binarySearch(card, arr[i]))
}

console.log(answer.join(" "));

function binarySearch (card, target) {
    let left = 0;
    let right = card.length - 1;
    let mid = 0;

    while(left <= right) {
        mid = parseInt((left + right) / 2);
        if(target == card[mid]) return 1;
        else if (card[mid] < target) left = mid + 1;
        else if (target < card[mid]) right = mid - 1;
    }
    return 0;
}


// 시간 초과

// for(let i=0; i<arr.length; i++) {
//     if(card.includes(arr[i]) == true) answer.push(1);
//     else answer.push(0);
// }

// console.log(answer.join(" "));