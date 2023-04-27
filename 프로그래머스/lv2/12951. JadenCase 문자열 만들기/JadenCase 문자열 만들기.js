function solution(s) {
  let ans = "";
  let sToArr = s.split("");
  let firstStr = true;

  sToArr.forEach((value) => {
    if (value === " ") {
      firstStr = true;
      ans += " ";
    } else {
      if (Number(value)) {
        ans += value;
        firstStr = false;
      } else {
        if (firstStr) {
          ans += value.toUpperCase();
          firstStr = false;
        } else {
          ans += value.toLowerCase();
        }
      }
    }
  });
  return ans;
}