function solution(brown, yellow) {
  let height = 1;
  let width = yellow / height;

  while (width >= height) {
    if (brown === (width + 2) * 2 + height * 2) {
      return [width + 2, height + 2];
    } else {
      height += 1;
      width = yellow / height;
    }
  }
}