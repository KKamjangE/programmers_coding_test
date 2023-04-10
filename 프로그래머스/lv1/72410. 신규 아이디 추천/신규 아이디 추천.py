import re

def solution(new_id):
    ans = ''
    result = new_id.lower()
    result = re.sub(r'[^0-9a-z-_.]', '', result)

    for i in result:
        if i == ".":
            if ans and ans[-1] == ".":
                continue
            elif not ans:
                continue
            else:
                ans += i
        else:
            ans += i

    if len(ans) > 15:
        ans = ans[:15]
    
    while ans and ans[-1] == ".":
        ans = ans[:-1]

    if not ans:
        ans = "a"
    if len(ans) <= 2:
        while len(ans) < 3:
            ans += ans[-1]
    
    return ans