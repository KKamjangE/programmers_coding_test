function solution(n,a,b) {
    let ans = 0;
    
    while(a !== b){
        a = Math.ceil(a / 2); // 소수점 이하를 올림
        b = Math.ceil(b / 2); // 소수점 이하를 올림
        ans += 1 // 라운드 + 1
    }
    
    return ans;
}