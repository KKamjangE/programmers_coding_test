import sys
input = sys.stdin.readline

num = 1
for _ in range(3):
    num *= int(input())

for n in range(10):
    print(str(num).count(str(n)))