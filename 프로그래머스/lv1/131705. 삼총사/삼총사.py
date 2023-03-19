import itertools

def solution(number):
    ans = 0
    for i in itertools.combinations(number, 3):
        if sum(i) == 0:
            ans += 1
    return ans