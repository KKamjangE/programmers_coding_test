function solution(n, wires) {
    let ans = n;

    const graph = Array.from({length: n + 1}, () => new Array);
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    })

    const BFS = (start, except) => {
        const que = [start];
        const visited = new Array(n + 1).fill(false);
        visited[start] = true;
        let count = 1;
        
        while(que.length > 0) {
            q = que.shift();
            graph[q].forEach((value) => {
                if(!visited[value] && value !== except) {
                    visited[value] = true;
                    que.push(value);
                    count += 1;
                }
            });
        }
        return count;
    }
    
    wires.forEach(([v1, v2]) => {
        ans = Math.min(ans, Math.abs(BFS(v1, v2) - BFS(v2, v1)));
    })
    
    return ans;
}