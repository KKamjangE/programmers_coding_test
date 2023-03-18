import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

visited = [False] * (N)

s = []

def dfs(start):
    tmp = 0
    if len(s) == M:
        print(" ".join(map(str, s)))
        return
    for i in range(start, N):
        if visited[i] or tmp == arr[i]:
            continue
        tmp = arr[i]
        visited[i] = True
        s.append(arr[i])
        dfs(i)
        s.pop()
        visited[i] = False

dfs(0)