import math
from itertools import combinations

def solution(nums):
    ans = 0
    
    def prime(num):
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return 0
        return 1
    
    for i in combinations(nums, 3):
        ans += prime(sum(i))
    
    return ans