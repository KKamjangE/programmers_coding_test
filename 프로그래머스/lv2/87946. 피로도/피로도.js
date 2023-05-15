function solution(k, dungeons) {
  let ans = 0;
  let visited = Array(dungeons.length).fill(false);
  const DFS = (curr, count) => {
    if (ans < count) {
      ans = count;
    }

    dungeons.forEach((value, idx) => {
      if (!visited[idx] && curr >= value[0]) {
        visited[idx] = true;
        DFS(curr - value[1], count + 1);
        visited[idx] = false;
      }
    });
  };

  DFS(k, 0);

  return ans;
}