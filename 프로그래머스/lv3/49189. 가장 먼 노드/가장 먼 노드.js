function solution(n, edge) {
    const visited = new Array(n + 1).fill(0); // 방문 처리 배열
    const graph = Array.from({length: n + 1}, () => new Array()); // 간선 그래프 생성
    
    edge.forEach(([a, b]) => { // 간선 그래프 초기화
        graph[a].push(b);
        graph[b].push(a);
    });
    
    const que = [[1, 1]]; // 시작 노드, 거리
    visited[1] = 1 // 시작 노드 위치 1로 초기화
    
    while(que.length > 0) {
        const [q, count] = que.shift();
        
        graph[q].forEach((value) => {
            if(visited[value] === 0){ // 방문하지 않았다면
                visited[value] = count + 1; // 현재 위치에서 + 1
                que.push([value, count + 1]);
            }
        })
    }
    
    const max = Math.max(...visited); // 가장 먼 노드의 위치 값
    return visited.filter((value) => value === max).length; // 가장 먼 노드가 몇 개인지 반환
}