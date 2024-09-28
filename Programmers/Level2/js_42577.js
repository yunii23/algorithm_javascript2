// 전화번호 목록

const phone_book = ["12","123","1235","567","88"];
let answer = true

const phoneMap = {}

for (let phone of phone_book) phoneMap[phone] = true

// 전화번호를 하나씩 확인
for(let phone of phone_book) {
    for(let i=1; i<phone.length; i++) {
        if(phoneMap[phone.slice(0, i)]) {
            answer = false;
            break;
        }
    }
    if (!answer) break; // 외부 반복문 종료
}

console.log(answer);