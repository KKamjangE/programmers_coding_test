function solution(n, edge) {    
    const graph = Array.from({length: n + 1}, () => new Array);
    edge.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    const visited = new Array(n + 1).fill(0);
    visited[1] = 1;
    const que = [[1, 0]];
    
    while(que.length > 0){
        const [q, count] = que.shift();
        
        graph[q].forEach((v) => {
            if(visited[v] === 0){
                visited[v] = count + 1;
                que.push([v, count + 1]);
            }
        });
    }
    
    const maxNum = Math.max(...visited);
    return visited.filter((value) => value === maxNum).length;
}