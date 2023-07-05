function solution(n, wires) {
  let ans = n; // 최대 길이로 초기화
  const graph = Array.from({ length: n + 1 }, () => new Array()); // 빈 그래프 배열

  wires.forEach(([v1, v2]) => {
    // 양방향 간선
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const BFS = (start, except) => {
    let que = [start];
    const visited = new Array(n + 1).fill(false); // 방문 처리 배열
    visited[start] = true;
    let count = 1; // 시작 노드부터 카운트

    while (que.length > 0) {
      const q = que.shift();

      graph[q].forEach((v) => {
        if (v != except && !visited[v]) {
          // 끊어진 부분이 아니고 방문하지 않았다면
          que.push(v);
          visited[v] = true;
          count += 1; // 노드 개수 + 1
        }
      });
    }
    return count; // 노드 개수 반환
  };

  wires.forEach(([v1, v2]) => {
    // 주어진 간선들 순회
    // BFS(시작 노드, 끊어진 노드)
    ans = Math.min(ans, Math.abs(BFS(v1, v2) - BFS(v2, v1)));
  });

  return ans;
}