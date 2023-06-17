function solution(bridge_length, weight, truck_weights) {
    let ans = 1;
    const arr = new Array(bridge_length).fill(0);
    let w = truck_weights[0];
    arr[arr.length - 1] = truck_weights.shift();
    
    while(w > 0){
        w -= arr.shift();
        if(w + truck_weights[0] <= weight){
            w += truck_weights[0];
            arr.push(truck_weights.shift());
        }else{
            arr.push(0);
        }
        ans += 1;
    }
    console.log(arr);
    return ans;
}