function solution(num_list) {
  let ans = 0;
  const sol = (val) => {
    let count = 0;
    while (1) {
      if (val === 1) {
        break;
      }
      count++;
      if (val % 2 === 0) {
        val /= 2;
      } else {
        val = (val - 1) / 2;
      }
    }
    return count;
  };

  num_list.forEach((value) => {
    ans += sol(value);
  });

  return ans;
}