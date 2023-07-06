function solution(n, computers) {
  let ans = 0;

  const visited = Array(n).fill(false);

  const BFS = (start) => {
    const que = [start];

    while (que.length > 0) {
      q = que.shift();
      computers[q].forEach((value, idx) => {
        if (!visited[idx] && value === 1) {
          visited[idx] = true;
          que.push(idx);
        }
      });
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      BFS(i);
      ans += 1;
    }
  }

  return ans;
}