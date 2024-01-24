// 공 넣기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const [n, m] = input[0].trim().split(" ");

//console.log(input);

let basket;
(basket = []).length = n;
basket.fill(0);

for(let i=0; i<m; i++) {
    let arr = input[i+1].trim().split(" ");
    //console.log(arr);

    for(let j=parseInt(arr[0]); j<=parseInt(arr[1]); j++) {
        basket[j-1] = arr[2];
    }
    //console.log(basket);
}

let answer = basket.join(" ");

console.log(answer);