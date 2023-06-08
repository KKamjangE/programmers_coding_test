function solution(n, results) {
  let ans = 0;

  // 각 결과에 대해 2차원 배열에 표기
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
  results.forEach((value) => {
    const [win, lose] = value;
    graph[win][lose] = 1; // 이겼을 때
    graph[lose][win] = -1; // 졌을 때
    graph[win][win] = 0;
    graph[lose][lose] = 0;
  });

  const rangeN = [...Array(n).keys()].map((e) => e + 1);
  // 플로이드 와샬 알고리즘
  for (const mid of rangeN) {
    for (const i of rangeN) {
      for (const j of rangeN) {
        // i가 mid를 이기고, mid가 j를 이기면 i가 j를 이김
        if (graph[i][mid] === 1 && graph[mid][j] === 1) {
          graph[i][j] = 1;
        }
        // i가 mid에게 지고, mid가 j에게 지면 i가 j에게 짐
        if (graph[i][mid] === -1 && graph[mid][j] === -1) {
          graph[i][j] = -1;
        }
      }
    }
  }

  // 경기결과를 추측할 수 없는 경우는 false로 그대로 남아있음
  // 각 선수에 대해 false가 전혀 없는 경우만 ans + 1
  for (const self of rangeN) {
    let hasFalse = false;
    for (const other of rangeN) {
      if (graph[self][other] === false) {
        hasFalse = true;
        break;
      }
    }
    ans += hasFalse ? 0 : 1;
  }

  return ans;
}