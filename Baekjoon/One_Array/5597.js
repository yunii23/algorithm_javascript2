// 과제 안 내신 분..?

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

let student;
(student = []).length = 30;
student.fill(-1);

for(let i=0; i<input.length; i++) {
    student[input[i]-1] = 0;
}
console.log(student);

let answer = [];

answer.push(student.indexOf(-1) + 1);
answer.push(student.indexOf(-1, answer[0]) + 1);

for(let i=0; i<2; i++) {
    console.log(answer[i])
}