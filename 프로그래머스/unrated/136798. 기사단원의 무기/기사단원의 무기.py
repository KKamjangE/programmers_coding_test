def solution(number, limit, power):
    ans = 1
    
    for i in range(2, number + 1):
        count = 0
        for j in range(1, int(i ** 0.5 + 1)):
            if i % j == 0:
                count += 1
                if j ** 2 != i:
                    count += 1
        if count > limit:
            ans += power
        else:
            ans += count
    return ans