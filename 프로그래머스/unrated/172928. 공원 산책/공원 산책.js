function solution(park, routes) {
  let newPark = park.map((value) => value.split(""));
  let x, y;

  let controls = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  newPark.forEach((value, idxY) => {
    value.forEach((val, idxX) => {
      if (val === "S") {
        x = idxX;
        y = idxY;
      }
    });
  });

  routes.forEach((value) => {
    let [control, whight] = value.split(" ");
    let check = true;
    let newX = x,
      newY = y;
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
        check = false;
      }
    }
    if (check) {
      x = newX;
      y = newY;
    }
  });

  return [y, x];
}