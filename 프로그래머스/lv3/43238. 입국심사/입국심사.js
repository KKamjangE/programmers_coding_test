function solution(n, times) {
    let ans = 0;
    
    let left = 0;
    let right = Math.max(...times) * n;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let people = 0;
        for(let i = 0; i < times.length; i++){
            people += Math.floor(mid / times[i]);
            if(people >= n) break;
        }
        
        if(people >= n){
            ans = mid;
            right = mid - 1;
        } else if(people < n) {
            left = mid + 1;
        }
    }
    
    return ans;
}