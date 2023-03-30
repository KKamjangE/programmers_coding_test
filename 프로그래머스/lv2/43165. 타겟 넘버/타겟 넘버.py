def solution(numbers, target):
    ans = 0

    def dfs(index, count):
        nonlocal ans
        if index == len(numbers):
            if count == target:
                ans += 1
                return
            else:
                return
        
        dfs(index+1, count - numbers[index])
        dfs(index+1, count + numbers[index])
    
    dfs(0, 0)
    return ans