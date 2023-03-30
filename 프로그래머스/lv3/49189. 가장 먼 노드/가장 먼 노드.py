from collections import deque

def solution(n, edge):
    graph = [[] for _ in range(n + 1)]
    visited = [0] * (n + 1)
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)

    visited[1] = 1
    que = deque([1])

    while que:
        now = que.popleft()
        
        for i in graph[now]:
            if not visited[i]:
                visited[i] = visited[now] + 1
                que.append(i)
                
    return visited.count(max(visited))