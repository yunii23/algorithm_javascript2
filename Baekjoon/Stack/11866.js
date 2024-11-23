// 요세푸스 문제 0

const fs = require('fs');
const [n, k] = fs.readFileSync("example.txt").toString().trim().split(" ").map(Number);
// 제출시 /dev/stdin

const arr = Array.from({length: n}, (_, i) => i+1)
const answer = []

for (let i=0; i<n; i++) {
    for (let j=1; j<=k; j++) {
        if (j == k) answer.push(arr.shift())
        else arr.push(arr.shift())
    }
}

console.log("<" + answer.join(", ") + ">");