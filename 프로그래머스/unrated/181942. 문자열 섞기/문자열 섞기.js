function solution(str1, str2) {
  let ans = "";
  str1.split("").forEach((value, index) => {
    ans += value;
    ans += str2[index];
  });
  return ans;
}