function solution(priorities, location) {
  let ans = 0;
  let stack = [];

  priorities.forEach((value, index) => {
    stack.push([value, index]);
  });
  while (stack.length > 0) {
    tmp = stack.shift();
    if (
      stack.length > 0 &&
      Math.max(...stack.map((value) => value[0])) > tmp[0]
    ) {
      stack.push(tmp);
    } else {
      ans++;
      if (tmp[1] == location) {
        return ans;
      }
    }
  }
}