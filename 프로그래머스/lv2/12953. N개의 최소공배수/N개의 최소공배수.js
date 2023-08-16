function solution(arr) {
    let ans = 0;
    const max = Math.max(...arr); // 배열 중 가장 큰 값
    let count = 0; // 모든 요소가 공배수인지 확인하는 변수
    
    while(count < arr.length){ // 모든 요소가 공배수면 종료
        count = 0;
        ans += max;
        for(const item of arr){
            if(ans % item === 0){ // ans가 공배수라면
                count += 1;
            }
        }
    }
    
    return ans;
}