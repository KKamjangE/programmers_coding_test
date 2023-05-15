function solution(n, wires) {
  let ans = 1e9;

  let graph = Array.from({ length: n + 1 }, () => []); // 간선 그래프 생성

  wires.forEach(([a, b]) => {
    // 간선 그래프 초기화
    graph[a].push(b);
    graph[b].push(a);
  });

  const BFS = (start, except) => {
    let visited = Array(n + 1).fill(false); // 방문 처리 배열
    let count = 1; // 노드 개수 카운팅
    let que = [[start]]; // 큐
    visited[start] = true; // 방문 처리

    while (que.length > 0) {
      q = que.shift();
      graph[q].forEach((value) => {
        if (value != except && !visited[value]) {
          // 끊은 노드부분을 제외한 노드들을 순회
          count += 1;
          visited[value] = true;
          que.push(value);
        }
      });
    }

    return count;
  };

  wires.forEach(([a, b]) => {
    // 간선 순회
    ans = Math.min(ans, Math.abs(BFS(a, b) - BFS(b, a)));
  });

  return ans;
}