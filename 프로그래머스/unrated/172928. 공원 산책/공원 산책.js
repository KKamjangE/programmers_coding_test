function solution(park, routes) {
  let newPark = park.map((value) => value.split("")); // park를 2차원 배열로
  let x, y;

  // 방향 컨트롤러
  let controls = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  // 시작 위치 초기화
  newPark.forEach((value, idxY) => {
    value.forEach((val, idxX) => {
      if (val === "S") {
        x = idxX;
        y = idxY;
      }
    });
  });

  routes.forEach((value) => {
    let [control, whight] = value.split(" "); // 방향, 거리
    let newX = x,
      newY = y;
    // 거리 만큼 반복
    for (let i = 0; i < Number(whight); i++) {
      newY = newY + controls[control][0];
      newX = newX + controls[control][1];
      if (
        0 > newY ||
        newY >= newPark.length ||
        0 > newX ||
        newX >= newPark[0].length ||
        newPark[newY][newX] === "X"
      ) {
        return; // 다음 반복문으로(forEach continue)
      }
    }
    x = newX;
    y = newY;
  });

  return [y, x];
}