// 붙임성 좋은 총총이

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const arr = input.splice(1)

const dance = new Set()
dance.add("ChongChong")

for (let i=0; i<arr.length; i++) {
    const [a, b] = arr[i].trim().split(" ")

    if (dance.has(a) && !dance.has(b)) dance.add(b)
    else if (!dance.has() && dance.has(b)) dance.add(a)
}

console.log(dance.size);