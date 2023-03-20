def solution(a, b):
    days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    now = 4
    for i in range(a - 1):
        now += month[i]
    now += b
    return days[now % 7]