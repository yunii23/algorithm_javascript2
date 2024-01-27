// 공 바꾸기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, m] = input[0].trim().split(" ");
let basket = new Array(n);

for(let i=0; i<n; i++) {
    basket[i] = i+1;
}

for(let i=0; i<m; i++) {
    let [a, b] = input[i+1].trim().split(" ");
    let a_basket = basket[a-1];

    basket[a-1] = basket[b-1];
    basket[b-1] = a_basket;
}

let answer = basket.join(" ");

console.log(answer);