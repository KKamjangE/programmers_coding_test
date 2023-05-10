function solution(maps) {
  let ans = 0;
  let S;
  let L;
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "L") {
        L = [i, j];
      }
      if (maps[i][j] === "S") {
        S = [i, j];
      }
    }
  }

  const BFS = (start, end, step) => {
    let visited = Array.from({ length: maps.length }, () =>
      new Array(maps[0].length).fill(false)
    );
    let nx, ny;
    let que = [[...start, step]];
    while (que.length > 0) {
      let [x, y, count] = que.shift();
      if (maps[x][y] === end) {
        return count;
      }
      for (let i = 0; i < 4; i++) {
        nx = x + dx[i];
        ny = y + dy[i];
        if (
          0 <= nx &&
          nx < maps.length &&
          0 <= ny &&
          ny < maps[0].length &&
          !visited[nx][ny] &&
          maps[nx][ny] != "X"
        ) {
          que.push([nx, ny, count + 1]);
          visited[nx][ny] = true;
        }
      }
    }
    return 0;
  };

  let tmp = BFS(S, "L", 0);
  if (tmp === 0) {
    return -1;
  } else {
    ans += tmp;
  }

  tmp = BFS(L, "E", ans);
  if (tmp === 0) {
    return -1;
  } else {
    return tmp;
  }
}