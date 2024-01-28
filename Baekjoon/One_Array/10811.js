// 바구니 뒤집기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, m] = input[0].trim().split(" ");

let basket;
(basket = []).length = n;
basket.fill(0);

for(let i=0; i<basket.length; i++) {
    basket[i] = i+1;
}

for(let i=0; i<m; i++) {
    let [a, b] = input[i+1].trim().split(" ");

    let left;
    let right;
    let middle;

    if(a == 1) {
        left = basket.splice(0, b).reverse();
        right = basket;
        basket = [];

        basket = [...left, ...right];
    }
    else if (b == n) {
        left = basket.splice(0, a-1);
        right = basket.reverse();
        basket = [];

        basket = [...left, ...right];
    }
    else if (a == 1 && b == n) {
        basket = basket.reverse();
    }
    else {
        right = basket.splice(b);
        left = basket.splice(0, a-1);
        middle = basket.reverse();
        basket = [];

        basket = [...left, ...middle, ...right];
    }
}

let answer = basket.join(" ");

console.log(answer);