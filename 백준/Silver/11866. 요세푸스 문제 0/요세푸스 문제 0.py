import sys
from collections import deque
input = sys.stdin.readline

N, K = map(int, input().split())

que = deque(i for i in range(1, N + 1))
ans = []

while que:
    for i in range(K):
        if i == K-1:
            ans.append(que.popleft())
        else:
            que.append(que.popleft())
            
print("<", end="")
print(*ans, sep=", ", end="")
print(">")