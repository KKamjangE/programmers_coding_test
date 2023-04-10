def solution(board, moves):
    ans = 0
    box = []
    
    for move in moves:
        for toy in board:
            if toy[move-1]:
                box.append(toy[move-1])
                toy[move-1] = 0
                break
        while len(box) >= 2 and box[-1] == box[-2]:
            box.pop()
            box.pop()
            ans += 1
    
    return ans * 2