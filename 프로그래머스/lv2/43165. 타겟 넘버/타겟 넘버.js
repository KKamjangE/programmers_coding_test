function solution(numbers, target) {
  let ans = 0;

  const DFS = (value, depth) => {
    if (depth === numbers.length) {
      if (value === target) {
        ans += 1;
      }
      return;
    }

    DFS(value + numbers[depth], depth + 1);
    DFS(value - numbers[depth], depth + 1);
  };

  DFS(0, 0);

  return ans;
}