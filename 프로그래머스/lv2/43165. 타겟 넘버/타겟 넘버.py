def solution(numbers, target):
    ans = 0

    def dfs(start, depth):
        nonlocal ans
        if depth == len(numbers):
            if start == target:
                ans += 1
            return
        
        dfs(start + numbers[depth], depth + 1)
        dfs(start - numbers[depth], depth + 1)
    
    dfs(0, 0)
    
    return ans