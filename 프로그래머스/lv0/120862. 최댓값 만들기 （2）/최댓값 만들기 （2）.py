import itertools

def solution(numbers):
    ans = 0
    if len(numbers) == 2:
        return numbers[0] * numbers[1]
    for i in itertools.combinations(numbers, 2):
        ans = max(ans, i[0] * i[1])
    return ans