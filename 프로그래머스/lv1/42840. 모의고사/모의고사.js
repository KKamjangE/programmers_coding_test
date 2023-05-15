function solution(answers) {
  let ans = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1c = answers.filter(
    (value, idx) => value === a1[idx % a1.length]
  ).length;
  let a2c = answers.filter(
    (value, idx) => value === a2[idx % a2.length]
  ).length;
  let a3c = answers.filter(
    (value, idx) => value === a3[idx % a3.length]
  ).length;
  let max = Math.max(a1c, a2c, a3c);

  [a1c, a2c, a3c].forEach((value, idx) => {
    if (value === max) {
      ans.push(idx + 1);
    }
  });

  return ans;
}