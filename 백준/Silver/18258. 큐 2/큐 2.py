import sys
from collections import deque
input = sys.stdin.readline

N = int(input())

q = deque()

for _ in range(N):
    n = input().split()

    if n[0] == "push":
        q.append(n[1])
    elif n[0] == "pop":
        print(q.popleft() if q else -1)
    elif n[0] == "size":
        print(len(q))
    elif n[0] == "empty":
        print(0 if q else 1)
    elif n[0] == "front":
        print(q[0] if q else -1)
    elif n[0] == "back":
        print(q[-1] if q else -1)