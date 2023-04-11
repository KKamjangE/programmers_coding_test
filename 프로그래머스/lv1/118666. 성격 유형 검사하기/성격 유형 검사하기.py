def solution(survey, choices):
    ans = ''
    result = {"R":0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0, "N":0}
    char = ["R", "T", "C", "F", "J", "M", "A", "N"]

    for i in range(len(choices)):
        score = abs(choices[i]-4)
        if choices[i] < 4: # 비동의
            result[survey[i][0]] = result.get(survey[i][0]) + score
        elif choices[i] > 4: # 동의
            result[survey[i][1]] = result.get(survey[i][1]) + score
        elif choices[i] == 4:
            continue
    
    for i in range(0, len(char), 2):
        if result[char[i]] > result[char[i + 1]]:
            ans += char[i]
        elif result[char[i]] < result[char[i + 1]]:
            ans += char[i + 1]
        else:
            tmp = [char[i], char[i + 1]]
            tmp.sort()
            ans += tmp[0]

    return ans