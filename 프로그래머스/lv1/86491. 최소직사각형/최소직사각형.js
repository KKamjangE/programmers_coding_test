function solution(sizes) {
  let width = 0;
  let height = 0;

  sizes.forEach((value) => {
    value.sort((a, b) => a - b);
    const [w, h] = value;
    width = Math.max(w, width);
    height = Math.max(h, height);
  });

  return width * height;
}