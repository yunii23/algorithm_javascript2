// 하노이 탑 이동 순서

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

const n = parseInt(input)

// n: 이동할 원판의 수, from_rod: 현재 원판이 있는 기둥, to_rod: 원판을 이동할 기둥, aux_rod: 보조 기둥
function hanoi(n, from_rod, to_rod, aux_rod) {
    // 종료 조건: 원판 수 0
    if(n == 0) return;

    // 1단계: n-1개 원판을 보조 기둥으로 이동
    hanoi(n-1, from_rod, aux_rod, to_rod)

    // 2단계: n번째 원판을 목표 기둥으로 이동
    console.log(from_rod, to_rod);
    
    // 3단계: 보조 기둥에 있는 n-1개의 원판을 목표 기둥으로 이동
    hanoi(n-1, aux_rod, to_rod, from_rod)
}

console.log(2 ** n - 1);
hanoi(n, 1, 3, 2)