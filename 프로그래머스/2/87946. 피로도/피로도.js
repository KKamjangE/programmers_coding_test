function solution(k, dungeons) {
    let ans = 0
    const visit = Array.from({length: dungeons.length}, () => false)
    
    const DFS = (k, count) => {
        if(ans < count) ans = count
        dungeons.forEach(([minK, conK], index) => {
            if(minK <= k && !visit[index]) {
                visit[index] = true
                DFS(k - conK, count + 1)
                visit[index] = false
            }
        })
    }
    
    DFS(k, 0)
    
    return ans
}