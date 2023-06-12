function solution(numbers, target) {
  let ans = 0;

  const DFS = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) {
        ans += 1;
      }
      return;
    }

    DFS(idx + 1, sum + numbers[idx]);
    DFS(idx + 1, sum - numbers[idx]);
  };

  DFS(0, 0);

  return ans;
}