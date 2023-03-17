import sys
input = sys.stdin.readline

N, M = map(int, input().split())

visited = [False] * (N + 1)

s = []

def dfs():
    if len(s) == M:
        print(" ".join(map(str, s)))
        return

    for i in range(1, N + 1):
        s.append(i)
        dfs()
        s.pop()
        

dfs()