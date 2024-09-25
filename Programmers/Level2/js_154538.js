// 숫자 변환하기

let x = 10;
let y = 40;
let n = 5;

const arr = new Array(y+1);
arr.fill(Infinity)
arr[x] = 0
for(let i=x; i<=y; i++) {
    if(arr[i] != Infinity) {
        if(2 * i <= y) arr[2*i] = Math.min(arr[2*i], arr[i] + 1);
        if(3 * i <= y) arr[3*i] = Math.min(arr[3*i], arr[i] + 1);
        if(i + n <= y) arr[i+n] = Math.min(arr[i+n], arr[i] + 1);
    }
}
console.log(arr);

console.log(arr[y] === Infinity ? -1 : arr[y]);