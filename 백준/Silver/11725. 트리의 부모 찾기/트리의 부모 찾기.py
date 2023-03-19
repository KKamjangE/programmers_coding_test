import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**8)

N = int(input())

g = [[] for _ in range(N + 1)] # 인접리스트

parent = [0 for _ in range(N + 1)] # 루트의 부모를 담는 배열

for _ in range(N - 1): # 간선 연결
    u, v = map(int, input().split())
    g[u].append(v)
    g[v].append(u)
    
def dfs(v):
    for i in g[v]: # 인접리스트 순회
        if parent[i] == 0: # 부모가 아직 없다면
            parent[i] = v # 현재 루트를 부모로
            dfs(i) # 재귀

dfs(1)

print(*parent[2:], sep="\n") # 0번은 빈칸, 1번은 루트이기에 2번부터 출력