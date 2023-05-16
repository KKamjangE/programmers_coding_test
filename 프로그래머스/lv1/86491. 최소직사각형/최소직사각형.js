function solution(sizes) {
  let x = 0;
  let y = 0;
  let arr = sizes.map((value) => {
    return value.sort((a, b) => a - b);
  });

  arr.forEach(([wight, height]) => {
    x = Math.max(x, wight);
    y = Math.max(y, height);
  });

  return x * y;
}