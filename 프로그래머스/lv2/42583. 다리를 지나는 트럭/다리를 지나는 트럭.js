function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0); // queue
    bridge[bridge_length - 1] = truck_weights[0]; // 첫 번째 트럭 올리기
    let bridge_weights = truck_weights.shift(); // 첫 번째 트럭 무게
    let ans = 1; // 첫 번째 트럭 올라간 시간
    
    while(bridge_weights > 0){
        bridge_weights -= bridge.shift(); // 다리에서 하나 내리기
        
        if(bridge_weights + truck_weights[0] <= weight){ // 다리에 하나 더 올릴 수 있다면
            bridge.push(truck_weights[0]); // 트럭 올리기
            bridge_weights += truck_weights.shift(); // 올라간 트럭 무게 더하기
        } else {
            bridge.push(0); // 빈 공간 올리기
        }
        
        ans += 1;
    }
    
    return ans;
}