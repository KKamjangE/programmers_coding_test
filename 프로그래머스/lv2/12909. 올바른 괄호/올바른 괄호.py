def solution(s):
    ans = []
    for i in s:
        if i == "(":
            ans.append(i)
        if i == ")":
            if ans:
                ans.pop()
            else:
                return False
    return True if not ans else False