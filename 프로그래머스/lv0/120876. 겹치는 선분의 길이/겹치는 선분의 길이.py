def solution(lines):
    ans = 0
    count = [0 for _ in range(200)]
    
    for line in lines:
        for i in range(line[0], line[1]):
            count[i + 100] += 1
    ans += count.count(2)
    ans += count.count(3)
    
    return ans