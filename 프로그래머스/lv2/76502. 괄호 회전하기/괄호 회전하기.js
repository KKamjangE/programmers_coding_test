function solution(s) {
  if (s.length % 2 === 1) return 0;
  let ans = 0;

  const check = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "[") {
        stack.push(str[i]);
      } else if (str[i] === "(") {
        stack.push(str[i]);
      } else if (str[i] === "{") {
        stack.push(str[i]);
      } else if (str[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (str[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (str[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        return 0;
      }
    }
    return stack.length > 0 ? 0 : 1;
  };

  for (let i = 0; i < s.length; i++) {
    ans += check(s);
    s = s.substr(1) + s.substr(0, 1);
  }

  return ans;
}