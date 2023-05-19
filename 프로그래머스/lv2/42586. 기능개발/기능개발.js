function solution(progresses, speeds) {
  let ans = [];

  let days = 0;
  let count = 0;
  while (progresses.length) {
    if (progresses[0] + days * speeds[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    } else {
      ans.push(count);
      count = 0;
      days += 1;
    }
  }
  ans.push(count);

  return ans.filter((value) => value != 0);
}