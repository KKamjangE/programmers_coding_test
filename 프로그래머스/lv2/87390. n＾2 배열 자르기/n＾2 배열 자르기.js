function solution(n, left, right) {
    let ans = [];
    
    for(let i = left; i <= right; i++){
        ans.push(Math.max(Math.floor(i / n), i % n) + 1);
    }
    
    return ans;
}