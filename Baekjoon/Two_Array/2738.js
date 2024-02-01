// 행렬 덧셈

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const nm = input[0].trim().split(" ");
const n = parseInt(nm[0]);
const m = parseInt(nm[1]);

const A = Array.from(new Array(n), () => new Array(m).fill(0));
const B = Array.from(new Array(n), () => new Array(m).fill(0));
const result = [];

for(let i=0; i<n; i++) {
    let temp = input[i+1].trim().split(" ");
    let temp2 = input[i+n+1].trim().split(" ");
    
    for(let j=0; j<m; j++) {
        A[i][j] = parseInt(temp[j]);
        B[i][j] = parseInt(temp2[j]);

        result[j] = A[i][j] + B[i][j]; 
    }
    console.log(result.join(" "));
}
