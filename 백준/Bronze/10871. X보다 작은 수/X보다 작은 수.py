import sys
input = sys.stdin.readline

A, X = map(int, input().split())
arr = list(map(int, input().split()))

for i in arr:
    if X > i:
        print(i)