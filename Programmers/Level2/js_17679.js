// 프렌즈 4블록
// 참고 https://yjg-lab.tistory.com/381

let m = 4;
let n = 5;
let board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
let answer = 0;

board = board.map(v => v.split(""));

while(true) {
    let willRemove = []; // 제거할 좌표 모음
    
    for(let i=0; i<m-1; i++) {
        for(let j=0; j<n-1; j++) {
            if (board[i][j] && // 빈칸이 아니면 2*2 블록 확인하여 좌표를 제거 리스트에 푸시
                board[i][j] == board[i][j+1] &&
                board[i][j] == board[i+1][j] &&
                board[i][j] == board[i+1][j+1]) {
                    willRemove.push([i, j]);
            }
        }
    }

    willRemove.forEach(v => {
        // 사각 블록 제거
        let [x, y] = v;
        board[x][y] = 0;
        board[x][y+1] = 0;
        board[x+1][y] = 0;
        board[x+1][y+1] = 0;
    })

    // 블록 내려주기
    for(let i=m-1; i>0; i--) {
        for(let j=0; j<n; j++) {
            //console.log(board[i][j]);
            if(!board[i][j]) {
                let f = i - 1;
                while(f >= 0) {
                    // 깊이 탐색
                    if(board[f][j]) {// 위쪽에 모양이 존재하면 위치 교환 
                        board[i][j] = board[f][j];
                        board[f][j] = 0;
                        break;
                    }
                    else {
                        f -= 1;
                    }
                }
            }
        }
    }

    // 더 이상 사각 블록이 없는 경우 리턴
    if(!willRemove.length) {
        answer = board.flat().filter(v => !v).length;
        break;
    }
}

console.log(answer);