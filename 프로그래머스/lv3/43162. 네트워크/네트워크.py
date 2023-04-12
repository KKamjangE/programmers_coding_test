from collections import deque

def solution(n, computers):
    ans = 0
    visited = [False] * n

    def bfs(start):
        que = deque([start])
        visited[start] = True
        
        while que:
            q = que.popleft()
            for i in range(n):
                if not visited[i] and computers[q][i]:
                    visited[i] = True
                    que.append(i)

    for i in range(n):
        if not visited[i]:
            bfs(i)
            ans += 1

    return ans