function solution(numbers, target) {
  let ans = 0;

  const dfs = (value, depth) => {
    if (depth === numbers.length) {
      if (value === target) {
        ans++;
      }
      return;
    }

    dfs(value + numbers[depth], depth + 1);
    dfs(value - numbers[depth], depth + 1);
  };

  dfs(0, 0);

  return ans;
}