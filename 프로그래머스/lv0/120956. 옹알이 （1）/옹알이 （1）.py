def solution(babbling):
    result = 0
    
    for i in babbling:
        cnt = 0
        word = ""
        for j in i:
            word += j
            if word in ['aya', 'ye', 'woo', 'ma']:
                word = ""
                cnt += 1
        if len(word) == 0 and cnt:
            result += 1
    return result