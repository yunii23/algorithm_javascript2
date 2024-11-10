// 회의실 배정

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const meeting = input.splice(1).map(line => line.split(" ").map(Number)).sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
})

let result = 0
let time = 0
for(let i=0; i<meeting.length; i++) {
    if (meeting[i][0] >= time) {
        time = meeting[i][1] 
        result++
    }
}

console.log(result);