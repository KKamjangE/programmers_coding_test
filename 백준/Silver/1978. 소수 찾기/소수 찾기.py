import sys
input = sys.stdin.readline

def prime(num):
    if num == 1:
        return 0
    
    for i in range(2, num):
        if num%i == 0:
            return 0
        
    return 1
    
N = int(input())
num_list = list(map(int, input().split()))

ans = 0

for num in num_list:
    ans += prime(num)

print(ans)