def solution(brown, yellow):
    total = brown + yellow
    
    for column in range(2, total + 1):
        if (total / column) % 1 == 0:
            row = total // column
            if row >= column and (2 * row) + (2 * column) == brown + 4:
                return [row, column]