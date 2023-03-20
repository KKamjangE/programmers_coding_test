def solution(a, b, n):
    answer = 0
    while n > 0:
        if n < a:
            break
        n -= a
        n += b
        answer += b
    return answer