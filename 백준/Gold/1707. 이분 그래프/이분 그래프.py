import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**8)

K = int(input()) # 테스트 케이스

def dfs(v, c):
    visited[v] = c # 이분 그래프 판별 체크
    for i in g[v]:
        if not visited[i]: # 방문하지 않았다면
            chk = dfs(i, -c) # 음수로 바꿔서 인접 정점 판별
            if not chk: # 이분 그래프가 아님
                return False
        elif visited[i] == visited[v]: # 인접 정점과 동일하면
            return False # 이분 그래프가 아님
    return True

for _ in range(K):
    V, E = map(int, input().split())

    g = [[] for _ in range(V + 1)] # 인접리스트
    
    visited = [False] * (V + 1) # 방문 처리 + 이분 그래프 판별 체크
    
    for _ in range(E): # 간선 연결
        u, v = map(int, input().split())
        g[u].append(v)
        g[v].append(u)
        
    for i in range(1, V + 1): # 그래프가 하나가 아닐 경우를 대비
        if not visited[i]: # 방문 체크
            ans = dfs(i, 1)
            if not ans: # 이분 그래프가 아니면 중지
                break
            
    print("YES" if ans else "NO")