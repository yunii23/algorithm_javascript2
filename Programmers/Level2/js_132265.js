// 롤케이크 자르기

const topping = [1, 2, 1, 3, 1, 4, 1, 2]
let answer = 0;

const leftCount = {}
const rightCount = {}

for(let i=0; i<topping.length; i++) {
    rightCount[topping[i]] = (rightCount[topping[i]] !== undefined ? rightCount[topping[i]] : 0) + 1
}

let leftTypes = 0;
let rightTypes = Object.keys(rightCount).length 

for(let idx=0; idx<topping.length; idx++) {
    const currentTopping = topping[idx]

    if(!leftCount[currentTopping]) leftTypes++
    leftCount[currentTopping] = (leftCount[currentTopping] !== undefined ? leftCount[currentTopping] : 0) + 1

    rightCount[currentTopping]--;

    if(rightCount[currentTopping] === 0) {
        rightTypes--
        delete rightCount[currentTopping]
    }

    if(leftTypes === rightTypes) answer++
}

console.log(answer);