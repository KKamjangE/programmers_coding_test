function solution(l, r) {
  let ans = [];
  for (let num = l; num <= r; num++) {
    let err = false;
    let numToStr = num + "";
    numToStr.split("").forEach((value) => {
      if (value != "5" && value != "0") {
        err = true;
      }
    });
    if (!err) {
      ans.push(num);
    }
  }
  return ans.length > 0 ? ans : [-1];
}