import itertools

def solution(numbers):
    ans = []
    for i in itertools.combinations(numbers, 2):
        ans.append(sum(i))
    return sorted(list(set(ans)))