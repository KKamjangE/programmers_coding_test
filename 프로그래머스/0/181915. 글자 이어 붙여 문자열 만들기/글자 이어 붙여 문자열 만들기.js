function solution(my_string, index_list) {
  let ans = "";
  let my_stringToArr = my_string.split("");
  index_list.forEach((value) => {
    ans += my_stringToArr[value];
  });
  return ans;
}