function solution(numbers, target) {
    let ans = 0;
    
    const DFS = (currNum, depth) => {
        if(depth === numbers.length){
            if(currNum === target){
                ans += 1;
            }
            return;
        }
        
        DFS(currNum + numbers[depth], depth + 1);
        DFS(currNum - numbers[depth], depth + 1);
    }
    
    DFS(0, 0)
    
    return ans;
}