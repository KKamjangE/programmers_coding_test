from collections import deque

def solution(begin, target, words):
    visited = [False] * len(words)
    
    def bfs(start, depth):
        que = deque()
        que.append([start, depth])
        
        while que:
            q, dep = que.popleft()
            
            if q == target:
                return dep
            
            for i in range(len(words)):
                count = 0
                if not visited[i]:
                    for j in range(len(words[i])):
                        if q[j] != words[i][j]:
                            count += 1
                        if count > 1:
                            break
                    if count == 1:
                        que.append([words[i], dep + 1])
                        visited[i] = True
        return 0
    
    return bfs(begin, 0)