function solution(strArr) {
  let arr = Array(31).fill(0);
  strArr.forEach((value) => {
    arr[value.length] += 1;
  });

  return Math.max(...arr);
}