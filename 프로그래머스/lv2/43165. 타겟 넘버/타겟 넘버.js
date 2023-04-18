function solution(numbers, target) {
  var answer = 0;

  const dfs = (value, depth) => {
    if (depth === numbers.length) {
      if (value === target) {
        answer++;
      }
      return;
    }

    dfs(value + numbers[depth], depth + 1);
    dfs(value - numbers[depth], depth + 1);
  };

  dfs(0, 0);

  return answer;
}