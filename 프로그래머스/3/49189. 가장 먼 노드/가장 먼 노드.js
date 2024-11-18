function solution(n, edge) {
    const visited = Array.from({length: n + 1}, () => Number.MAX_SAFE_INTEGER)
    const graph = Array.from({length: n + 1}, () => [])
    edge.forEach(([a, b]) => {
        graph[a].push(b)
        graph[b].push(a)
    })
    
    const que = [1]
    visited[1] = 1
    while(que.length > 0) {
        const q = que.shift()
        graph[q].forEach((v) => {
            if(visited[v] > visited[q] + 1) {
                visited[v] = visited[q] + 1
                que.push(v)
            }
        })
    }
    
    const max = Math.max(...visited.slice(1))
    return visited.filter((v) => v === max).length
}