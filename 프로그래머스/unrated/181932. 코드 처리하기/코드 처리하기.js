function solution(code) {
  let ans = "";
  let mode = false;

  code.split("").forEach((value, idx) => {
    if (value === "1") {
      mode = !mode;
    } else {
      if (!mode) {
        if (idx % 2 === 0) {
          ans += value;
        }
      } else {
        if (idx % 2 != 0) {
          ans += value;
        }
      }
    }
  });

  return ans.length ? ans : "EMPTY";
}