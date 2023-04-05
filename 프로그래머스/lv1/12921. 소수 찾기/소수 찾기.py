import math

def solution(n):
    ans = 0
    
    def prime(num):
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return 0
        return 1
    
    for i in range(2, n + 1):
        ans += prime(i)
    
    return ans