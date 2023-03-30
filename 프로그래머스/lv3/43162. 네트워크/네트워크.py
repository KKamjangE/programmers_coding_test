def solution(n, computers):
    ans = 0
    def dfs(i):
        visited[i] = True
        for j in range(n):
            if computers[i][j] and not visited[j]:
                dfs(j)

    visited = [False] * n
    for i in range(n):
        if not visited[i]:
            dfs(i)
            ans += 1

    return ans