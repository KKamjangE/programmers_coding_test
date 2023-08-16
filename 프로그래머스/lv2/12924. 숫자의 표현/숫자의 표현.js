function solution(n) {
    let ans = 0;
    
    for(let i = 0; i <= n; i++){
        if(n % i === 0 && i % 2 === 1){ // 소수일 경우
            ans += 1;
        }
    }
    
    return ans;
}