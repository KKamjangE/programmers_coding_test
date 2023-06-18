function solution(n, wires) {
    let ans = n;
    let graph = Array.from({length: n + 1}, () => new Array);

    const BFS = (start, except) => {
        const que = [[start]];
        const visited = new Array(n + 1).fill(false);
        let count = 1;
        visited[start] = true;

        while(que.length > 0){
            q = que.shift();
            graph[q].forEach((v) => {
                if(v != except && !visited[v]){
                    visited[v] = true;
                    que.push(v);
                    count += 1;
                }
            })
        }
        
        return count;
    }
    
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    })
    
    wires.forEach(([a, b]) => {
        ans = Math.min(ans, Math.abs(BFS(a, b) - BFS(b, a)));
    })
    
    return ans;
}