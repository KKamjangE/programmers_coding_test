function solution(myString, pat) {
  let ans = 0;
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === pat[0]) {
      if (myString.slice(i, i + pat.length) === pat) {
        ans += 1;
      }
    }
  }
  return ans;
}