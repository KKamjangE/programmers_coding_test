def solution(dartResult):
    result = list(dartResult)
    score = []
    scoreCount = 0
    tmp = ""
    
    for i in range(len(result)):
        if result[i].isdigit():
            tmp += result[i]
        if result[i] == "S":
            score.append(int(tmp))
            tmp = ""
        elif result[i] == "D":
            score.append(int(tmp)**2)
            tmp = ""
        elif result[i] == "T":
            score.append(int(tmp)**3)
            tmp = ""
        elif result[i] == "*":
            if len(score) > 1:
                score[-1] *= 2
                score[-2] *= 2
            else:
                score[-1] *= 2
        elif result[i] == "#":
            score[-1] *= -1
    
    return sum(score)