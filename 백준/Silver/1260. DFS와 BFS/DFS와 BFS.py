from collections import deque
import sys
input = sys.stdin.readline

N, M, V = map(int, input().split()) # 정점 개수, 간선 개수, 탐색 시작 정점 번호

g = [[] for _ in range(N + 1)] # 2차원 배열 인접리스트

for _ in range(M): # 간선 연결
    a, b = map(int, input().split())
    g[a].append(b) # 인접리스트에 정점 추가
    g[b].append(a) # 인접리스트에 정점 추가
    
for i in g: # 그래프 안의 정점 배열 정렬
    i.sort()

def dfs(V): # dfs 함수
    visited[V] = True # 방문 처리
    print(V, end=" ")
    
    for i in g[V]: # 인접리스트 순회
        if not visited[i]: # 방문 하지 않았다면
            dfs(i) # 재귀

def bfs(V):
    que = deque([V])
    visited[V] = True # 방문 처리
    
    while que: # que가 빈 배열이 될 때까지
        V = que.popleft()
        print(V, end=" ")
        
        for i in g[V]: # 인접리스트 순회
            if not visited[i]: # 방문 하지 않았다면
                que.append(i) # 해당 정점을 큐에 추가
                visited[i] = True # 방문 처리

visited = [False] * (N + 1)
dfs(V)
visited = [False] * (N + 1)
print()
bfs(V)