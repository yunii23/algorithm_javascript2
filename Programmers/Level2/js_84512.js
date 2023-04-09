// 모음사전
// 참고 https://han-joon-hyeok.github.io/posts/programmers-vowel-dictionary/

let word = "AAAAE";
let answer = 0;

let str = '';
let arr = [];

for(let i=1; i<=5; i++) {
    dfs(str, i, arr);
}

function dfs(words, len, arr) {
    let temp = [..."AEIOU"];

    if(len == words.length) {
        arr.push(words);
        return;
    }

    temp.forEach((t) => {
        dfs(words + t, len, arr);
    })
};

arr.sort();

//console.log(arr);

answer = arr.indexOf(word) + 1;

console.log(answer);