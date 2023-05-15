function solution(answers) {
  let ans = [];
  let people = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = [0, 0, 0];

  answers.forEach((value, idx) => {
    people.forEach((answer, i) => {
      let tmp = idx % answer.length;
      if (value === answer[tmp]) {
        score[i] += 1;
      }
    });
  });

  let max = Math.max(...score);

  score.forEach((value, idx) => {
    if (value === max) {
      ans.push(idx + 1);
    }
  });

  return ans;
}