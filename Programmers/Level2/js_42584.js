// 주식가격

const prices = [1, 2, 3, 2, 3]	
const answer = new Array(prices.length).fill(0);
    
for(let i=0; i<prices.length; i++) {
    for(let j=i+1; j<prices.length; j++) {
        answer[i]++;
        if(prices[j] < prices[i]) break; // 가격이 떨어지면 종료
    }
}

console.log(answer);