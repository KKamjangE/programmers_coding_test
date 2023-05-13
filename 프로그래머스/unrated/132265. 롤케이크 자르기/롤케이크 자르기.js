function solution(topping) {
  let ans = 0;
  let right = 0;
  let left = 0;
  let [toppingLeft, toppingRight] = [
    Array(10001).fill(0),
    Array(10001).fill(0),
  ];
  // 토핑 초기값 세팅
  topping.forEach((value) => {
    if (toppingRight[value] === 0) right += 1;
    toppingRight[value] += 1;
  });

  // 토핑 하나씩 왼쪽 배열로 넘기기
  topping.forEach((value) => {
    if (toppingLeft[value] === 0) {
      toppingLeft[value] += 1;
      left += 1;
    }
    toppingRight[value] -= 1;
    if (toppingRight[value] === 0) right -= 1;
    if (right === left) {
      ans += 1;
    }
  });
  return ans;
}