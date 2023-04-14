function solution(n, lost, reserve) {
  const students = Array.from({ length: n + 1 }, () => 1);
  lost.forEach((l) => students[l]--);
  reserve.forEach((r) => students[r]++);

  let count = 0;
  students.forEach((student, i) => {
    if (student === 0) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        student++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        student++;
      } else {
        count++;
      }
    }
  });

  return n - count;
}