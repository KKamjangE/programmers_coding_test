function solution(s) {
  let stack = [];

  [...s].forEach((value) => {
    if (stack.length && stack[stack.length - 1] === value) {
      stack.pop();
    } else {
      stack.push(value);
    }
  });

  return stack.length === 0 ? 1 : 0;
}