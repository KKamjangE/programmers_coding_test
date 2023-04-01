from itertools import product

def solution(word):
    arr = ["A", "E", "I", "O", "U"]
    words = []
    ans = 0
    
    for i in range(1, 6):
        for j in product(arr, repeat=i):
            words.append("".join(list(j)))

    words.sort()
    
    return words.index(word) + 1