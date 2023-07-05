function solution(answers) {
  let ans = [0, 0, 0];

  const case1 = [1, 2, 3, 4, 5];
  const case2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const case3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((value, idx) => {
    if (value === case1[idx % case1.length]) ans[0] += 1;
    if (value === case2[idx % case2.length]) ans[1] += 1;
    if (value === case3[idx % case3.length]) ans[2] += 1;
  });

  const maxNum = Math.max(...ans);

  return ans.reduce((prev, curr, idx) => {
    if (curr === maxNum) return [...prev, (idx += 1)];
    else return prev;
  }, []);
}