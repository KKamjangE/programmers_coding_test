function solution(maps) {
  let ans = 0;
  const M = maps.length;
  const N = maps[0].length;

  let [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  let visited = Array.from({ length: M }, () =>
    new Array(maps[0].length).fill(false)
  );

  let que = [[0, 0, 1]];

  while (que.length > 0) {
    [x, y, depth] = que.shift();
    if (M - 1 === x && N - 1 === y) {
      ans = depth;
      break;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        0 <= nx &&
        nx < M &&
        0 <= ny &&
        ny < N &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        que.push([nx, ny, depth + 1]);
      }
    }
  }

  return ans ? ans : -1;
}