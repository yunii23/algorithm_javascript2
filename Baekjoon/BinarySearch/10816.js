// 숫자 카드 2

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const card = input[1].split(" ").map(Number).sort((a, b) => (a > b ? 1 : -1))
const arr = input[3].split(" ").map(Number)

const card_reduce = card.reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1
    return accu
}, {})

function binarySearch(target) {
    let left = 0
    let right = card.length - 1
    let mid

    while(left <= right) {
        mid = Math.trunc((left + right) / 2)
   
        if(card[mid] === target) return card_reduce[target]
        else if (card[mid] > target) right = mid - 1
        else if (card[mid] < target) left = mid + 1
    }
    return 0
}

const result = []
for(let i=0; i<arr.length; i++) {
    result.push(binarySearch(arr[i]))
}

console.log(result.join(" "));