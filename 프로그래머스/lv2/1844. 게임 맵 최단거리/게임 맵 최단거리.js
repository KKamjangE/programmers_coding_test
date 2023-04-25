function solution(maps) {
  const N = maps.length,
    M = maps[0].length;
  let visited = Array.from({ length: N }, () => new Array(M).fill(-1));
  let dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1];

  let que = [[0, 0]];
  visited[0][0] = 1;
  while (que.length > 0) {
    [x, y] = que.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < M &&
        visited[nx][ny] === -1 &&
        maps[nx][ny] === 1
      ) {
        visited[nx][ny] = visited[x][y] + 1;
        que.push([nx, ny]);
      }
    }
  }

  return visited[N - 1][M - 1];
}