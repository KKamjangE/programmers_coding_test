function solution(n) {
  let ans = n;
  let binaryN = n.toString(2).match(/1/g).length;

  while (1) {
    ans += 1;
    let tmp = ans.toString(2).match(/1/g).length;

    if (tmp === binaryN) {
      break;
    }
  }

  return ans;
}