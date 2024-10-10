// 덧칠하기

let n = 8;
let m = 4;
let section = [2, 3, 6];
let answer = 0;

const wall = new Array(n+1).fill(true)

for(let i=0; i<section.length; i++) {
    wall[section[i]] = false
}

for(let i=1; i<wall.length; i++) {
    if(wall[i] == false) {
        answer++
        i = i + m - 1
    }
}

console.log(answer);