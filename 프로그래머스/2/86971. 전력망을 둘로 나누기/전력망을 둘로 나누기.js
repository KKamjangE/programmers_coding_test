function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => [])
    
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2)
        graph[v2].push(v1)
    })
    
    const BFS = (start, except) => {
        let count = 0
        const visited = Array.from({length: n + 1}, () => false)
        const que = [start]
        visited[start] = true
        while(que.length > 0) {
            const q = que.shift()
            graph[q].forEach((value) => {
                if(!visited[value] && except !== value) {
                    que.push(value)
                    visited[value] = true
                    count++
                }
            })
        }
        return count
    }
    
    let ans = n
    
    wires.forEach(([v1, v2]) => {
        ans = Math.min(ans, Math.abs(BFS(v1, v2) - BFS(v2, v1)))
    })
    
    return ans
}