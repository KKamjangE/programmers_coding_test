function solution(maps) {
    const my = maps.length
    const mx = maps[0].length
    const visited = Array.from({length: my}, () => Array.from({length: mx}, () => -1))
    const dx = [0, 0, 1, -1]
    const dy = [1, -1 ,0 ,0]

    const que = [[0, 0]]
    visited[0][0] = 1
    
    while(que.length > 0) {
        const [y, x] = que.shift()
        
        for(let i=0;i<4;i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(0 <= nx && nx < mx && 0 <=ny && ny < my && visited[ny][nx] === -1 && maps[ny][nx] === 1) {
                que.push([ny, nx])
                visited[ny][nx] = visited[y][x] + 1
            }
        }
    }
    
    return visited[my - 1][mx - 1]
}