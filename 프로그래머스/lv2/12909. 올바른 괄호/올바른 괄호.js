function solution(s) {
  let stack = [];
  for (i of s) {
    if (i === "(") {
      stack.push(i);
    } else if (stack.length > 0 && i === ")") {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}