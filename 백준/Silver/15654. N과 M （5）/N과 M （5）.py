import sys
input = sys.stdin.readline

N, M = map(int, input().split())

Narr = list(map(int, input().split()))
Narr.sort()

visited = [False] * (N)

s = []

def dfs():
    if len(s) == M:
        print(" ".join(map(str, s)))
        return
    for i in range(N):
        if visited[i]:
            continue
        visited[i] = True
        s.append(Narr[i])
        dfs()
        s.pop()
        visited[i] = False

dfs()