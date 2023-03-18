import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**8)

N, M = map(int, input().split())

visited = [False] * (N + 1) # 방문 처리 배열

g = [[] for _ in range(N + 1)] # 인접 리스트

for _ in range(M): # 간선 연결
    u, v = map(int, input().split())
    g[u].append(v) # 인접리스트에 정점 추가
    g[v].append(u) # 인접리스트에 정점 추가

ans = 0 # 연결 요소 개수

def dfs(V): # dfs 함수
    visited[V] = True # 방문 처리
    
    for i in g[V]: # 인접리스트 순회
        if not visited[i]: # 방문하지 않았다면
            dfs(i) # 재귀
            
for i in range(1, N + 1): # 끝어진 정점 확인을 위해 모든 정점을 순회
    if not visited[i]: # 방문하지 않았다면
        if not g[i]: # 연결된 정점이 존재하지 않는다면
            ans += 1
            visited[i] = True # 방문 처리
        else:
            dfs(i) # 그래프 탐색
            ans += 1
            
print(ans)