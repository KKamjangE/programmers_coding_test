const check = (p) => {
  let stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      stack.push(p[i]);
    } else {
      if (stack.length) {
        stack.pop();
      } else return false;
    }
  }

  return true;
};

function solution(p) {
  let ans = "";
  let open = 0;
  let close = 0;

  if (!p) return ""; // 1

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") open++;
    else close++;

    if (open === close) {
      // 2, 3
      if (check(p.slice(0, i + 1))) {
        // 3-1
        ans = p.slice(0, i + 1) + solution(p.slice(i + 1));
        return ans;
        // 4
      } else {
        // 4-1, 4-2, 4-3
        ans = "(" + solution(p.slice(i + 1)) + ")";

        // 4-4
        for (let j = 1; j < i; j++) {
          if (p[j] === "(") {
            ans = ans + ")";
          } else {
            ans = ans + "(";
          }
        }

        // 4-5
        return ans;
      }
    }
  }
}