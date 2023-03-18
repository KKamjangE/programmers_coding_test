import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

s = []

def dfs():
    tmp = 0
    if len(s) == M:
        print(" ".join(map(str, s)))
        return
    for i in range(N):
        if tmp == arr[i]:
            continue
        tmp = arr[i]
        s.append(arr[i])
        dfs()
        s.pop()

dfs()