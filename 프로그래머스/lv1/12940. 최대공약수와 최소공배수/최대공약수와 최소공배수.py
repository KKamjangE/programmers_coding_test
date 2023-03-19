import math

def lcm(n, m):
    return (n * m) // math.gcd(n, m)

def solution(n, m):
    return [math.gcd(n, m), lcm(n, m)]