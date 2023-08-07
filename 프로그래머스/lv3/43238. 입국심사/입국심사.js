function solution(n, times) {
    let ans = 0;
    let left = 0; // 최소 시간
    let right = n * Math.max(...times); // 최대 시간
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2); // 임의의 주어진 시간
        let people = 0; // 입국심사 가능한 인원
        
        for(let i = 0; i < times.length; i++){
            people += Math.floor(mid / times[i]); // 시간 내에 입국심사 가능한 인원
            if(people >= n) break; // 대기 인원보다 많으면 시간이 남는다는 뜻
        }
        
        if(people >= n) { // 시간이 남는다면
            ans = mid; // 시간 내에 가능하다는 뜻
            right = mid - 1; // 최대 시간 줄이기
        } else if (people < n) { // 시간이 부족하다면
            left = mid + 1; // 최소 시간 늘리기
        }
    }
    
    return ans;
}