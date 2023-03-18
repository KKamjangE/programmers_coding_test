import sys
input = sys.stdin.readline

K = int(input())
arr = []

def stack(a):
    if a == 0:
        arr.pop()
    else:
        arr.append(a)

for _ in range(K):
    a = int(input())
    stack(a)
    
print(sum(arr))