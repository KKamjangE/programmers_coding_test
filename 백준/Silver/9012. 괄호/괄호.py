import sys
input = sys.stdin.readline

T = int(input())


for _ in range(T):
    stack = []
    VPS = True
    arr = input()
    for i in arr:
        if i == "(":
            stack.append(i)
        elif i == ")":
            if not stack:
                VPS = False
                break
            elif stack:
                stack.pop()

    if not stack and VPS:
        print("YES")
    else:
        print("NO")