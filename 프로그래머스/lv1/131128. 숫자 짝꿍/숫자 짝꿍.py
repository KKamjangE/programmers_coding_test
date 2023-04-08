def solution(X, Y):
    ans = ""
    xDict = dict()
    yDict = dict()
    
    for x in X:
        xDict[x] = xDict.get(x, 0) + 1
        
    for y in Y:
        yDict[y] = yDict.get(y, 0) + 1
        
    for k in xDict.keys():
        if k in yDict.keys():
            while yDict[k] > 0 and xDict[k] > 0:
                ans += k
                yDict[k] = yDict[k] - 1
                xDict[k] = xDict[k] - 1

    if len(ans) == 0: return "-1"

    if ans.count("0") == len(ans):
        return "0"

    return "".join(sorted(ans, reverse=True))