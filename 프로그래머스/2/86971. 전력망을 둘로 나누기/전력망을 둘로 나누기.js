function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => [])
    wires.forEach(([v1, v2]) => {
        graph[v2].push(v1)
        graph[v1].push(v2)
    })
    
    const visited = Array.from({length: n + 1}, () => false)
    
    const DFS = (start, except) => {
        if(visited[start]) return
        visited[start] = true
        
        graph[start].forEach((v) => {
            if(!visited[v] && v !== except) {
                DFS(v, except)
            }
        })        
    }
    
    return wires.reduce((ans, [v1, v2]) => {
        DFS(v1, v2)
        const a = visited.slice(1).filter((v) => v).length
        const b = n - a
        ans = Math.min(ans, Math.abs(a - b))
        visited.fill(false)
        count = 0
        return ans
    }, n)
}
