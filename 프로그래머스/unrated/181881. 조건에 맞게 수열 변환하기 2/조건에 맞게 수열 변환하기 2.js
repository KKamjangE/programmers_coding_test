function solution(arr) {
  let count = 0;
  let curr = [...arr];
  let prev = [];

  while (1) {
    prev = curr;
    curr = curr.map((value) => {
      if (50 <= value && value % 2 === 0) {
        return value / 2;
      } else if (value < 50 && value % 2 != 0) {
        return value * 2 + 1;
      }
      return value;
    });
    console.log(prev, curr);
    if (JSON.stringify(prev) === JSON.stringify(curr)) {
      break;
    }
    count++;
  }
  return count;
}