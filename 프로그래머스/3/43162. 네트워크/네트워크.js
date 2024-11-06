function solution(n, computers) {
    const visited = Array.from({length: n}, () => false)
    
    const BFS = (start) => {    
        visited[start] = true
        const que = [start]
        
        while(que.length > 0) {
            const q = que.shift()
            computers[q].forEach((v, index) => {
                if(!visited[index] && v === 1) {
                    visited[index] = true
                    que.push(index)
                }
            })
        }
        
        return 1
    }
    
    return computers.reduce((sum, computer) => {
        computer.forEach((v, i) => {
            if(!visited[i] && v === 1)
                sum += BFS(i)
        })
        return sum
    }, 0)
}