def solution(before, after):
    if len(before) != len(after):
        return 0
    elif sorted(before) == sorted(after):
        return 1
    else: return 0