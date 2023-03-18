import sys
input = sys.stdin.readline

N = int(input())
stack = []

for _ in range(N):
    h = int(input())
    if not stack:
        stack.append(h)
        continue
    
    while stack[-1] <= h:
        stack.pop()
        if not stack:
            break

    stack.append(h)
    
print(len(stack))