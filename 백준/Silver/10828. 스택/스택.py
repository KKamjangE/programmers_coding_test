import sys
input = sys.stdin.readline

N = int(input())

arr = []

def stack(a):
    if a[0] == "push":
        arr.append(a[1])
    elif a[0] == "pop":
        print(-1 if len(arr) == 0 else arr.pop())
    elif a[0] == "size":
        print(len(arr))
    elif a[0] == "empty":
        print(1 if len(arr) == 0 else 0)
    elif a[0] == "top":
        print(-1 if len(arr) == 0 else arr[-1])
    
for _ in range(N):
    a = input().split()
    stack(a)