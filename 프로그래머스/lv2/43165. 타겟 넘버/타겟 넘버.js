function solution(numbers, target) {
  var ans = 0;

  const DFS = (sum, depth) => {
    if (depth === numbers.length) {
      if (sum === target) {
        ans += 1;
      }
      return;
    }

    DFS(sum - numbers[depth], depth + 1);
    DFS(sum + numbers[depth], depth + 1);
  };

  DFS(0, 0);

  return ans;
}