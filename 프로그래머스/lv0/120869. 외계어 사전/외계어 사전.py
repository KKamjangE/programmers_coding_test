def solution(spell, dic):
    for d in dic:
        ans = [i for i in spell if d.count(i)]
        print(ans)
        if len(ans) == len(spell):
            return 1
    return 2