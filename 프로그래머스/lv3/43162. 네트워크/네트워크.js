function solution(n, computers) {
  let ans = 0;
  let visited = Array.from({ length: n }, () => false);

  const BFS = (value) => {
    let que = [value];

    while (que.length > 0) {
      q = que.shift();

      q.forEach((value, idx) => {
        if (value === 1 && !visited[idx]) {
          visited[idx] = true;
          que.push(computers[idx]);
        }
      });
    }
  };

  computers.forEach((value, idx) => {
    if (!visited[idx]) {
      ans += 1;
      BFS(value);
    }
  });

  return ans;
}