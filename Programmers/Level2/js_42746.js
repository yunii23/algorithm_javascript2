// 가장 큰 수

const numbers = [0, 0, 0]
let answer = '';

numbers.sort((a, b) => {
    const A = a.toString()
    const B = b.toString()
    return (B + A) - (A + B)
})

answer = numbers.join("");

if(answer[0] === '0') answer = '0'

console.log(answer);