// 뒤에 있는 큰 수 찾기
// 참고 https://velog.io/@highero-k/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%92%A4%EC%97%90-%EC%9E%88%EB%8A%94-%ED%81%B0-%EC%88%98-%EC%B0%BE%EA%B8%B0-JavaScript-Level-2

let numbers = [9, 1, 5, 3, 6, 2];
let answer = [];

answer = Array(numbers.length).fill(-1);

let stack = [];

for(let i=0; i<numbers.length; i++) {

    while(stack && numbers[stack.at(-1)] < numbers[i]) {
        answer[stack.pop()] = numbers[i];
    }

    stack.push(i);
}

console.log(answer);

// 시간초과

// for(let i=0; i<numbers.length-1; i++) {

//     let max = Math.max(...numbers.slice(i+1));

//     for(let j=i+1; j<numbers.length; j++) {

//         if(numbers[i] > max) {
//             answer.push(-1);
//             break;
//         }
//         else {
//             if(numbers[i] < numbers[j]) {
//                 answer.push(numbers[j])
//                 break;
//             }
//         }
//     }
// }

// answer.push(-1);
