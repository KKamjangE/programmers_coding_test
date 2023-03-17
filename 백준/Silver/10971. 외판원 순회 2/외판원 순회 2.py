import sys
input = sys.stdin.readline

def dfs(start, now, value, cnt):
    global ans
    if cnt == N:
        if arr[now][start]:
            value += arr[now][start]
            if ans > value:
                ans = value
        return
    
    if value > ans:
        return
    
    for i in range(N):
        if not visited[i] and arr[now][i]:
            visited[i] = 1
            dfs(start, i, value + arr[now][i], cnt + 1)
            visited[i] = 0

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
ans = sys.maxsize
visited = [0] * N
for i in range(N):
    visited[i] = 1
    dfs(i, i, 0, 1)
    visited[i] = 0
print(ans)