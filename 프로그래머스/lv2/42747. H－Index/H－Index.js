function solution(citations) {
    let ans = 0;
    citations.sort((a, b) => b - a);
    
    for(let i = 0; i < citations.length; i++){
        if(i < citations[i]){
            ans += 1;
        } else if(i > citations[i]){
            break;
        }
    }
    
    return ans;
}