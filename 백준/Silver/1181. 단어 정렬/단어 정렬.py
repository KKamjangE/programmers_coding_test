import sys
input = sys.stdin.readline

N = int(input())

arr = [input().strip() for _ in range(N)]
newArr = list(set(arr))
newArr.sort()
newArr.sort(key=len)
print(*newArr, sep='\n')