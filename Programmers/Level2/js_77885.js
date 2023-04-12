// 2개 이하로 다른 비트
// 참고 https://dev-note-97.tistory.com/269

let numbers = [2,7];
let answer = [];

// 십진수 x가 짝수면 무조건 x+1이 답이됨
// -> x의 가장 마지막 값이 0으로 끝나는데, 정답 조건이 1 또는 2개 다른 수 이므로 +1 하면 1개 다른게 됨

// 홀수일때
// 뒤에서부터 첫번째로 등장하는 01을 찾음
// 이부분을 10으로 바꿔주면 2비트만 바꾸어 만들수 있는 가장 작은 값이 됨
// 11011(27) -> 11101(29)

numbers.forEach((number) => {
    let str = "0" + number.toString(2);
    let len = str.length;

    if(str[len-1] == "0") {
        answer.push(number+1);
    }
    else {
        for(let i=str.length; i>=0; i--) {
            if(str[i] == "0") {
                answer.push(parseInt(str.substring(0, i) + "1" + "0" + str.substring(i+2, len), 2)) //2진수
                break;
            }
        }
    }
})

console.log(answer);


// -------- 10, 11 시간초과 --------

// for(let i=0; i<numbers.length; i++) {
//     let value = numbers[i].toString(2).split("").reverse();

//     let chk = 1;
//     while(true) {
//         let num = numbers[i] + chk;
//         let bit = num.toString(2).split("").reverse();
//         let count = 0;

//         for(let j=0; j<bit.length; j++) {
//             if(value[j] != bit[j]) count++;
//         }

//         if(count == 1 || count == 2) {
//             answer.push(num);
//             break;
//         }

//         chk++;
//     }
// }

// console.log(answer);