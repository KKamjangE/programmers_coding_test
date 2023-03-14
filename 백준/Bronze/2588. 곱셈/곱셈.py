import sys
input = sys.stdin.readline

a = int(input())
b = int(input())

arr = list(map(int, str(b)))

for i in range(len(arr)):
    print(arr[len(arr)-1-i] * a)

print(a * b)