// 숫자 카드2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let n = parseInt(input[0]);
let m = parseInt(input[2]);
let card = input[1].trim().split(" ").map(Number);
let have = input[3].trim().split(" ").map(Number);
let answer= [];
let map = new Map();

for(let i=0; i<card.length; i++) {
    if(map.has(card[i]) == true) map.set(card[i], map.get(card[i]) + 1);
    else map.set(card[i], 1);
}

for(let i=0; i<have.length; i++) {
    if(map.has(have[i]) == true) answer.push(map.get(have[i]));
    else answer.push(0);
}

console.log(answer.join(" "));
