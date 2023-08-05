function solution(n, wires) {
    let ans = n;
    const graph = Array.from({length: n + 1}, () => new Array); // 빈 그래프 생성
    
    wires.forEach(([v1, v2]) => {
        // 양방향 그래프 입력
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    const BFS = (start, except) => {
        const visited = new Array(n + 1).fill(false); // 방문 처리 배열
        const que = [start]; // 시작 노드
        visited[start] = true; // 시작 노드 방문 처리
        let count = 0; // 노드 개수
        
        while(que.length > 0) {
            const q = que.shift();
            graph[q].forEach((value) => {
                if(!visited[value] && except !== value) { // 방문하지 않았고 끊어진 노드가 아니라면
                    que.push(value);
                    visited[value] = true;
                    count += 1; // 노드 개수 + 1
                }
            });
        }
        
        return count; // 노드 개수 반환
    }
    
    wires.forEach(([v1, v2]) => {
        // 두 전력망의 차이가 가장 적은 수
        // BFS(시작 노드, 끊어진 노드)
        ans = Math.min(ans, Math.abs(BFS(v1, v2) - BFS(v2, v1)));
    });
    
    return ans;
}