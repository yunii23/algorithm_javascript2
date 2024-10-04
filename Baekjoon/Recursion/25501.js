// 재귀의 귀재

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

const t = parseInt(input[0])

function recursion(s, l, r, count) {
    if(l >= r) return [1, count]
    else if (s[l] !== s[r]) return [0, count]
    else return recursion(s, l+1, r-1, ++count)
}

function isPalindrome(s) {
    const count = 1
    return recursion(s, 0, s.length-1, count)
}

for(let i=1; i<=t; i++) {
    let [resultPalindrome, resultCount] = isPalindrome(input[i].trim())
    console.log(resultPalindrome + " " + resultCount);
}