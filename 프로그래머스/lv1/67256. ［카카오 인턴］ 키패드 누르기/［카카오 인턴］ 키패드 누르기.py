from collections import deque

def solution(numbers, hand):
    ans = ''
    phone = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]
    left = "*"
    right = "#"
    
    def bfs(start):
        visited = [[False] * 3 for _ in range(len(phone))]
        dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]
        if start == 2:
            idx = [0, 1, 0]
        elif start == 5:
            idx = [1, 1, 0]
        elif start == 8:
            idx = [2, 1, 0]
        elif start == 0:
            idx = [3, 1, 0]
        
        l = r = 0
        que = deque([idx])
        
        while que:
            x, y, count = que.popleft()
            visited[x][y] = True
            if phone[x][y] == left:
                l = count
            if phone[x][y] == right:
                r = count
            
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if 0 <= nx < 4 and 0 <= ny < 3 and not visited[nx][ny]:
                    que.append([nx, ny, count + 1])
        
        return l, r
    
    for num in numbers:
        if num in [1, 4, 7]:
            left = num
            ans += "L"
        elif num in [3, 6, 9]:
            right = num
            ans += "R"
        elif num in [2, 5, 8, 0]:
            l, r = bfs(num)
            if l == r:
                if hand == "right":
                    right = num
                    ans += "R"
                else:
                    left = num
                    ans += "L"
            elif l < r:
                left = num
                ans += "L"
            else:
                right = num
                ans += "R"
    
    return ans