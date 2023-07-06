function solution(numbers, target) {
  let ans = 0;

  const DFS = (num, depth) => {
    if (depth === numbers.length) {
      if (num === target) ans += 1;
      return;
    }

    DFS(num + numbers[depth], depth + 1);
    DFS(num - numbers[depth], depth + 1);
  };

  DFS(0, 0);

  return ans;
}