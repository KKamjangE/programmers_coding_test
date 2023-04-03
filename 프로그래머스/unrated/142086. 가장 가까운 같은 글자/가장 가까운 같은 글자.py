def solution(s):
    ans = []
    dic = dict()
    
    for i in range(len(s)):
        if s[i] not in dic:
            ans.append(-1)
        else:
            ans.append(i - dic[s[i]])
        dic[s[i]] = i
    return ans