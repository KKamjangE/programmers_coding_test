function solution(k, tangerine){
    let ans = 0;
    const obj = {};
    
    for(const item of tangerine){ // 같은 크기의 귤 갯수 카운팅
        obj[item] = (obj[item] || 0) + 1;
    }
    
    const temp = Object.values(obj).sort((a, b) => b - a); // 객체의 값을 내림차순 정렬
    
    let oranges = 0; // 상자에 담은 귤 갯수
    for(const item of temp){
        ans += 1; // 귤의 크기의 종류
        oranges += item;
        if(oranges >= k){
            break;
        }
    }
    
    return ans;
}