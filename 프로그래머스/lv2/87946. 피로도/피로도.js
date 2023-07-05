function solution(k, dungeons) {
  let ans = 0;
  const visited = new Array(dungeons.length).fill(false); // 방문 처리 배열

  const DFS = (k, count) => {
    if (ans < count) ans = count;

    dungeons.forEach(([minK, conK], idx) => {
      if (minK <= k && !visited[idx]) {
        // 입장 가능한 피로도이며 방문하지 않았다면
        visited[idx] = true; // 방문 처리
        DFS(k - conK, count + 1); // 피로도 - 소모피로도, 탐험한 던전 수 + 1
        visited[idx] = false; // DFS를 나왔으므로 방문해제
      }
    });
  };

  DFS(k, 0); // 피로도, 탐험한 던전 수

  return ans;
}