function solution(my_string) {
  let ans = [];
  for (let i = 0; i < my_string.length; i++) {
    ans.push(my_string.slice(-i));
  }

  ans.sort();
  return ans;
}