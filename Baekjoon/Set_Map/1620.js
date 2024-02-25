// 나는야 포켓몬 마스터 이다솜

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let temp = input[0].trim().split(" ").map(Number);
let n = temp[0]; // 도감에 수록된 포켓몬 수
let m = temp[1]; // 맞춰야 하는 문제의 개수
let map = new Map();
let map2 = new Map();

for(let i=1; i<=n; i++) {
    map.set(i, input[i].trim());
    map2.set(input[i].trim(), i);
}

let arr = [];
for(let i=n+1; i<input.length; i++) {
    arr.push(input[i].trim());
}

for(let i=0; i<m; i++) {
    if(map.has(parseInt(arr[i])) == true) {
        console.log(map.get(parseInt(arr[i])))
    }
    else if(map2.has(arr[i]) == true) {
        console.log(map2.get(arr[i]));
    }
}