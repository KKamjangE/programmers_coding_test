function solution(n, times) {
  let ans = 0;

  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let people = 0;
    times.forEach((time) => {
      people += Math.floor(mid / time);
      if (people >= n) {
        return;
      }
    });

    if (people >= n) {
      ans = mid;
      right = mid - 1;
    } else if (people < n) {
      left = mid + 1;
    }
  }

  return ans;
}