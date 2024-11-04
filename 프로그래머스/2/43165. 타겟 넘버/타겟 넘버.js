function solution(numbers, target) {
    let ans = 0
    
    const DFS = (depth, sum) => {
        if(depth === numbers.length) {
            if(sum === target) ans += 1
            return
        }
        
        DFS(depth + 1, sum + numbers[depth])
        DFS(depth + 1, sum - numbers[depth])
    }
    
    DFS(0, 0)
    
    return ans
}