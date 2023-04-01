def solution(k, dungeons):
    ans = 0
    visited = [False] * len(dungeons)
    
    def dfs(k, count):
        nonlocal ans
        ans = max(ans, count)
        
        for i in range(len(dungeons)):
            if k >= dungeons[i][0] and not visited[i]:
                visited[i] = True
                dfs(k - dungeons[i][1], count + 1)
                visited[i] = False
        
    dfs(k, 0)
    return ans