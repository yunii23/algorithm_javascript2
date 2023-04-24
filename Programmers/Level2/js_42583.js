// 다리를 지나는 트럭
// 참고 https://velog.io/@chloeelog/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EC%A7%80%EB%82%98%EB%8A%94-%ED%8A%B8%EB%9F%AD-JavaScript

let bridge_length = 100;
let weight = 100;
let truck_weights = [10,10,10,10,10,10,10,10,10,10]	;
let answer = 0;

let bridge = new Array(bridge_length).fill(0);
let bridge_sum = 0;

answer ++;
bridge.push(truck_weights[0]);
bridge_sum += truck_weights[0];
truck_weights.shift();
bridge.shift();

while(bridge_sum > 0) {
    answer++;
    bridge_sum -= bridge[0];
    bridge.shift();

    if(bridge_sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights[0]);
        bridge_sum += truck_weights[0];
        truck_weights.shift();
    }
    else {
        bridge.push(0);
    }
}

console.log(answer);