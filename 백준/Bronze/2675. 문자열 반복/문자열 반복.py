import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    R, arr = input().split()
    newArr = [i*int(R) for i in arr]
    print(*newArr, sep="")