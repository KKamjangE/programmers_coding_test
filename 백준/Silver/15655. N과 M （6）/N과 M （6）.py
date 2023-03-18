import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

visited = [False] * (N)

s = []

def dfs(start):
    if len(s) == M:
        print(" ".join(map(str, s)))
        return
    for i in range(start, N):
        if visited[i]:
            continue
        visited[i] = True
        s.append(arr[i])
        dfs(i)
        s.pop()
        visited[i] = False
        

dfs(0)