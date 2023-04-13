def solution(people, limit):
    ans = 0
    people.sort()
    
    a = 0
    b = len(people) - 1
    while a <= b:
        if a == b:
            ans += 1
            break
        if people[a] + people[b] <= limit:
            ans += 1
            a += 1
            b -= 1
        else:
            ans += 1
            b -= 1
    
    return ans