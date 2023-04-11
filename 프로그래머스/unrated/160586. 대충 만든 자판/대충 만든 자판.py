def solution(keymap, targets):
    ans = []
    
    def result(target):
        count = 0
        
        for i in target:
            key = []
            for k in keymap:
                tmp = k.find(i)
                if tmp != -1:
                    key.append(tmp + 1)
            if not key:
                return -1
            count += min(key)
        
        return count
        
    for i in targets:
        ans.append(result(i))
    
    return ans