function solution(order) {
  let ans = 0;
  for (i of order) {
    if (i.includes("americano") || i.includes("anything")) {
      ans += 4500;
    } else {
      ans += 5000;
    }
  }

  return ans;
}