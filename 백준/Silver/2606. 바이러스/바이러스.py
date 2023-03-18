import sys
input = sys.stdin.readline

C = int(input())
M = int(input())

visited = [False] * (C + 1)

g = [[] for _ in range(C + 1)]

for _ in range(M):
    u, v = map(int, input().split())
    g[u].append(v)
    g[v].append(u)

ans = 0

def dfs(s):
    global ans
    visited[s] = True
    
    for i in g[s]:
        if not visited[i]:
            ans += 1
            dfs(i)

dfs(1)
print(ans)