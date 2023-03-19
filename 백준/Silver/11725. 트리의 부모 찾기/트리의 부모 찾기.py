import sys
input = sys.stdin.readline
from collections import deque

N = int(input())

g = [[] for _ in range(N + 1)] # 인접리스트

parent = [0 for _ in range(N + 1)] # 루트의 부모를 담는 배열

for _ in range(N - 1): # 간선 연결
    u, v = map(int, input().split())
    g[u].append(v)
    g[v].append(u)    

def bfs(v):
    que = deque([v])
    
    while que:
        q = que.popleft()
        for i in g[q]:
            if parent[i] == 0:
                parent[i] = q
                que.append(i)

bfs(1)

print(*parent[2:], sep="\n") # 0번은 빈칸, 1번은 루트이기에 2번부터 출력