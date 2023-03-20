function solution(absolutes, signs) {
  let ans = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      ans += absolutes[i];
    } else {
      ans -= absolutes[i];
    }
  }
  return ans;
}