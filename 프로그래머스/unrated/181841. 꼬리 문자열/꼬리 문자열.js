function solution(str_list, ex) {
  let ans = "";
  str_list.forEach((value) => {
    if (!value.includes(ex)) {
      ans += value;
    }
  });
  return ans;
}