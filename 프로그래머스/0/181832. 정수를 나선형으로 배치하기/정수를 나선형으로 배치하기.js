function solution(n) {
    const arr = Array.from({length: n}, () => Array.from({length: n}, () => 0))
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    let d = 0
    let [x, y] = [0, 0]
    arr[y][x] = 1
    
    for(let i = 2;i <= n * n;i++){
        
        let nx = x + dx[d]
        let ny = y + dy[d]
        
        if(!(0 <= nx && nx < n && 0 <= ny && ny < n && arr[ny][nx] === 0)){
            d = (d + 1) % 4
            nx = x + dx[d]
            ny = y + dy[d]
        }
        
        x = nx
        y = ny
        
        arr[y][x] = i
    }
    
    return arr
}
