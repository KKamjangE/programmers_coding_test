function solution(my_string) {
  let ans = my_string.split(" ");
  return ans.filter((value) => value != "");
}