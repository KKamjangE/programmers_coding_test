from collections import deque

def solution(n, wires):
    ans = int(1e9)
    graph = [[] for _ in range(n + 1)]
    
    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
        
    def bfs(start):
        visited = [False] * (n + 1)
        que = deque([start])
        visited[start] = True
        count = 1

        while que:
            q = que.popleft()
            for i in graph[q]:
                if not visited[i]:
                    count += 1
                    visited[i] = True
                    que.append(i)
        
        return count
        
    for a, b in wires:
        graph[a].remove(b)
        graph[b].remove(a)
        
        ans = min(ans, abs(bfs(a) - bfs(b)))
        
        graph[a].append(b)
        graph[b].append(a)

    return ans