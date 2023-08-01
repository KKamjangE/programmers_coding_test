function solution(citations) {
    let ans = 0;
    
    citations.sort((a, b) => b - a); // 내림차순 정렬
    
    for(let h = 0; h < citations.length; h++) {
        if(h + 1 <= citations[h]) { // h번 이상 인용된 논문이 h편 이상인지
            ans += 1;
        } else {
            break;
        }
    }
    
    return ans;
}