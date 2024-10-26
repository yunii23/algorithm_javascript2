// 설탕 배달

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

let n = parseInt(input);

function sugarDelivery(n) {
    let count = 0

    while (n >= 0) {
        if(n % 5 == 0) {
            count += n / 5
            return count
        }
        n -= 3
        count++
    }

    return -1
}

console.log(sugarDelivery(n));