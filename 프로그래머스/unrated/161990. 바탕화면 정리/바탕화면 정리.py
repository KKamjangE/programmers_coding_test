def solution(wallpaper):
    ans = [51, 51, 0, 0]
    lux, luy, rdx, rdy = 0, 1, 2, 3
    
    for i, elements in enumerate(wallpaper):
        for j, element in enumerate(elements):
            if element == "#":
                ans[lux] = min(ans[lux], i)
                ans[luy] = min(ans[luy], j)
                ans[rdx] = max(ans[rdx], i + 1)
                ans[rdy] = max(ans[rdy], j + 1)
    
    return ans