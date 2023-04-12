// 게임 맵 최단거리
// 참고 https://bolob.tistory.com/entry/Level-2BFS-%EA%B2%8C%EC%9E%84-%EB%A7%B5-%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC-JavaScript

let maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
let answer = 0;

let xLen = maps.length;
let yLen = maps[0].length;
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

answer = bfs();

function bfs(){
    let queue = [[0, 0, 1]];

    while(queue.length) {
        console.log(queue);
        let [x, y, count] = queue.shift();
        if(x == xLen-1 && y == yLen-1) {
            return count;
        }
        
        for(let i=0; i<4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if(nx >= 0 && ny >= 0 && nx < maps.length && ny < maps[0].length && maps[nx][ny] == 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, count+1]);
            }
        }
    }

    return -1;
}

console.log(answer);




// -------- DFS로 풀었으나 시간초과 ------

// let result = [];

// let bool = Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(true));

// for(let i=0; i<maps.length; i++) {
//     for(let j=0; j<maps[i].length; j++) {
//         if(maps[i][j] == 1) bool[i][j] = false;
//     }
// }

// console.log(bool);

// dfs(0, 0, 1);

// console.log(result);

// if(result.length == 0) answer = -1;
// else {
//     answer = Math.min(...result);
// }

// console.log(answer);

// function dfs(x, y, count) {
//     console.log(x + " " + y + " " + count);

//     // 종료조건
//     if(x == maps.length-1 && y == maps[0].length-1) {
//         console.log("종료1");
//         result.push(count);
//         return;
//     }
//     if(x != 0 && y != 0 && bool[x-1][y] == true && bool[x+1][y] == true && bool[x][y-1] == true && bool[x][y+1] == true) {
//         console.log("종료2");
//         return;
//     }

//     // 북
//     if(x != 0 && maps[x-1][y] == 1 && bool[x-1][y] == false) {
//         bool[x][y] = true;
//         dfs(x-1, y, count+1);
//         bool[x][y] = false;
//     }
//     // 서
//     if(y != 0 && maps[x][y-1] == 1 && [x][y-1] == false) {
//         bool[x][y] = true;
//         dfs(x, y-1, count+1);
//         bool[x][y] = false;
//     }
//     // 동
//     if(y != maps[0].length-1 && maps[x][y+1] == 1 && bool[x][y+1] == false) {
//         bool[x][y] = true;
//         dfs(x, y+1, count+1);
//         bool[x][y] = false;
//     }
//     // 남
//     if(x != maps.length-1 && maps[x+1][y] == 1 && bool[x+1][y] == false) {
//         bool[x][y] = true;
//         dfs(x+1, y, count+1);
//         bool[x][y] = false;
//     }
// }