def solution(people, limit):
    boat = 0
    people.sort()
    
    a = 0
    b = len(people) - 1
    while a < b:
        if people[b] + people[a] <= limit:
            a += 1
            boat += 1
        b -= 1
    
    return len(people) - boat