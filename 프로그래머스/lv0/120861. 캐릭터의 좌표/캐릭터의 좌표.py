def solution(keyinput, board):
    maxX = (board[0] - 1) // 2
    maxY = (board[1] - 1) // 2
    commands = {
        "up": [0, 1],
        "down": [0, -1],
        "left": [-1, 0],
        "right": [1, 0]
    }
    
    x, y = 0, 0
    for command in keyinput:
        dx, dy = commands[command]
        nx, ny = x + dx, y + dy
        if abs(nx) <= maxX and abs(ny) <= maxY:
            x, y = nx, ny

    return [x, y]