// 체스판 다시 칠하기

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let temp = input[0].trim().split(" ").map(Number);
let n = temp[0];
let m = temp[1];

let board = Array.from(new Array(n), () => new Array(m).fill(''));
for(let i=0; i<board.length; i++) {
    let temp2 = input[i+1].trim().split("");

    for(let j=0; j<temp2.length; j++) {
        board[i][j] = temp2[j];
    }
}

let arr = [];
for(let i=0; i<=n-8; i++) {
    for(let j=0; j<=m-8; j++) {
        arr.push(chess1(i, j, board))
        arr.push(chess2(i, j, board))
    }
}

console.log(Math.min(...arr));

// 짝짝 - 홀홀
// 짝홀 - 홀짝

function chess1 (a, b, board) {
    let sum = 0;
    for(let k=a; k<a+8; k++) {
        for(let l=b; l<b+8; l++) {
            let aDivision = a % 2;
            let bDivision = b % 2;

            if((aDivision == k % 2) && (bDivision == l % 2) && (board[a][b] != board[k][l])) {
                sum ++;
            }
            else if((aDivision == k % 2) && (bDivision != l % 2) && (board[a][b] == board[k][l])) {
                sum ++;
            }
            else if((aDivision != k % 2) && (bDivision == l % 2) && (board[a][b] == board[k][l])) {
                sum ++;
            }
            else if((aDivision != k % 2) && (bDivision != l % 2) && (board[a][b] != board[k][l])) {
                sum ++;
            }
        }
    }

    return sum;
}

function chess2 (a, b, board) {
    let sum = 0;
    for(let k=a; k<a+8; k++) {
        for(let l=b; l<b+8; l++) {
            let aDivision = a % 2;
            let bDivision = b % 2;

            if((aDivision == k % 2) && (bDivision == l % 2) && (board[a][b] == board[k][l])) {
                sum ++;
            }
            else if((aDivision == k % 2) && (bDivision != l % 2) && (board[a][b] != board[k][l])) {
                sum ++;
            }
            else if((aDivision != k % 2) && (bDivision == l % 2) && (board[a][b] != board[k][l])) {
                sum ++;
            }
            else if((aDivision != k % 2) && (bDivision != l % 2) && (board[a][b] == board[k][l])) {
                sum ++;
            }
        }
    }

    return sum;
}