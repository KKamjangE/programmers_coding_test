function solution(my_strings, parts) {
  let ans = "";
  parts.forEach(([s, e], idx) => {
    ans += my_strings[idx]
      .split("")
      .slice(s, e + 1)
      .join("");
  });
  return ans;
}