function solution(n_str) {
  let ans = "";
  let check = false;
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] != "0") {
      check = true;
    }
    if (check) {
      ans += n_str[i];
    }
  }

  return ans;
}