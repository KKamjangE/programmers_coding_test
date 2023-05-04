function solution(my_string, m, c) {
  let ans = "";
  let arr = [];
  for (let i = 0; i < my_string.length; i += m) {
    arr.push(my_string.slice(i, i + m));
  }
  arr.forEach((value) => {
    ans += value[c - 1];
  });

  return ans;
}