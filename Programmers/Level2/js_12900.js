// 2 x n 타일링

let n = 4;
let answer = 0;

let arr = [1 % 1000000007, 1 % 1000000007];

for(let i=2; i<=n; i++) {
    arr.push((arr[i-1] + arr[i-2]) % 1000000007);
}

answer = arr[arr.length-1];

console.log(answer);