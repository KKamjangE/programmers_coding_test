function solution(n, computers) {
  let ans = 0;
  let visited = Array.from({ length: n }, (n) => false);

  const bfs = (start) => {
    que = [start];
    visited[start] = true;

    while (que.length > 0) {
      q = que.shift();
      for (let i = 0; i < n; i++) {
        if (computers[q][i] === 1 && visited[i] === false) {
          que.push(i);
          visited[q] = true;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      bfs(i);
      ans++;
    }
  }

  return ans;
}