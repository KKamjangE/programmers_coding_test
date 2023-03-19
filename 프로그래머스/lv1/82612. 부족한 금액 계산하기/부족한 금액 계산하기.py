def solution(price, money, count):
    a = 0
    for i in range(1, count +1):
        a += i * price
    return a - money if a > money else 0