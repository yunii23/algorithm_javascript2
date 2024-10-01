// 연속합

const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split(/\n/);
// 제출시 /dev/stdin

function maxSum(nums) {
    let n = nums.length;
    let dp = new Array(n); // 연속 합 저장
    dp[0] = nums[0]
    let max = dp[0]

    // 각 요소를 확인하며, 현재 요소와 이전 합계 중 더 큰 값을 선택
    for(let i=1; i<n; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        max = Math.max(max, dp[i])
    }

    return max
}

const arr = input[1].split(" ").map(Number)
console.log(maxSum(arr));
