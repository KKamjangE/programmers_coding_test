function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []); // 간선 그래프
  const countArr = new Array(n + 1).fill(0); // 도착 결과 배열
  countArr[1] = 1; // 1번 노드 초기화

  // 양방향 간선 그래프
  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const que = [[1, 1]]; // Queue 자료구조 [노드 번호, 거리]

  while (que.length > 0) {
    [node, depth] = que.shift(); // [노드 번호, 거리]

    // 해당 노드의 간선 순회
    graph[node].forEach((value) => {
      // 거리가 아직 입력되지 않았다면
      if (countArr[value] === 0) {
        que.push([value, depth + 1]);
        countArr[value] = depth + 1;
      }
    });
  }

  const maxDepth = Math.max(...countArr);
  return countArr.filter((value) => value === maxDepth).length;
}