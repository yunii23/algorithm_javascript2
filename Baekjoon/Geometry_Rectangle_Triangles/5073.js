// 삼각형과 세 변

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

for(let i=0; i<input.length; i++) {
    let temp = input[i].trim().split(" ").map(Number);

    let a = temp[0];
    let b = temp[1];
    let c = temp[2];
    let max = Math.max(...temp);
    let maxIndex = temp.indexOf(max);

    if(a == b && b == c && a == 0) {
        break;
    }
    else {
        if((maxIndex == 0 && a >= b + c) || (maxIndex == 1 && b >= a + c) || (maxIndex == 2 && c >= a + b)) {
            console.log("Invalid");
        }
        else {
            if(a == b && b == c && a == c) {
                console.log("Equilateral");
            }
            else if((a == b && a != c && b != c) || (a != b && a != c && b == c) || (a != b && a == c && b != c)) {
                console.log("Isosceles");
            }
            else if(a != b && a != c && b != c) {
                console.log("Scalene");
            }
        }
    }
}