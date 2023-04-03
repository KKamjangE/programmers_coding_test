def solution(board):
    ans = 0
    dx, dy = [1, -1, 0, 0, 1, -1, 1, -1], [0, 0, -1, 1, 1, 1, -1, -1]
    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 1:
                for k in range(8):
                    nx, ny = dx[k] + i, dy[k] + j
                    if 0 <= nx < len(board) and 0 <= ny < len(board[0]) and board[nx][ny] == 0:
                        board[nx][ny] = 2

    for i in range(len(board)):
        for j in range(len(board[i])):
            if board[i][j] == 0:
                ans += 1
                
    return ans