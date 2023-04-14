function solution(progresses, speeds) {
  var ans = [];

  let days = 0;
  let count = 0;
  while (progresses.length > 0) {
    if (progresses[0] + days * speeds[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    } else {
      ans.push(count);
      count = 0;
      days++;
    }
  }
  ans.push(count);

  return ans.filter((value) => value > 0);
}