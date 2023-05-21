function solution(order) {
  let ans = 0;
  let stack = [];
  for (let i = 1; i <= order.length; i++) {
    stack.push(i);
    while (stack.length > 0 && stack[stack.length - 1] === order[ans]) {
      stack.pop();
      ans += 1;
    }
  }
  return ans;
}