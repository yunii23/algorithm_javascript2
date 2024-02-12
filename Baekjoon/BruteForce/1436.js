// 영화감독 숌

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim();
// 제출시 /dev/stdin

// i666(0~9) - 666i(0~9)
// ii666(10~99) - i666i(1~9/0~9) - 666ii(00~99)
// iii666(100~999) - ii666i(10~99/0~9) - i666ii(1~9/00~99) - 666iii(000~999)

let arr = [];

