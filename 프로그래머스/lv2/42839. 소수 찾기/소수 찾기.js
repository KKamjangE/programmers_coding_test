function solution(numbers) {
  let ans = new Set();
  const check = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const DFS = (numArr, fixedNum) => {
    if (numArr.length) {
      for (let i = 0; i < numArr.length; i++) {
        if (check(parseInt(fixedNum + numArr[i]))) {
          ans.add(parseInt(fixedNum + numArr[i]));
        }
        const tmp = [...numArr];
        tmp.splice(i, 1);
        DFS(tmp, fixedNum + numArr[i]);
      }
    }
  };

  DFS(numbers.split(""), "");

  return ans.size;
}