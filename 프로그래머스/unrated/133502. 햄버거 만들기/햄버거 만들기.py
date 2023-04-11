def solution(ingredient):
    ans = 0
    tmp = ""

    for i in ingredient:
        tmp += str(i)
        if tmp[-4:] == "1231":
            tmp = tmp[:-4]
            ans += 1
    
    return ans