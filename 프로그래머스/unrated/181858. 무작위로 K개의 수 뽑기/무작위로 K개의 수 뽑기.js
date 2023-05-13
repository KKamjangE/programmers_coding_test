function solution(arr, k) {
  let answer = [];
  let newArr = [...new Set(arr)];

  newArr.forEach((value) => {
    if (k > 0) {
      answer.push(value);
      k--;
    }
  });

  for (let i = 0; i < k; i++) {
    answer.push(-1);
  }

  return answer;
}