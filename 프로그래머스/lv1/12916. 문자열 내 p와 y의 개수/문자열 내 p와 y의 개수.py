def solution(n):
    p = n.lower().count('p')
    y = n.lower().count('y')
    return True if p == y else False