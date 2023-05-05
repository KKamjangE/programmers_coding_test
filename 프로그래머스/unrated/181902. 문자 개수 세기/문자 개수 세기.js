function solution(my_string) {
  let ans = new Array(52).fill(0);
  [...my_string].forEach((value) => {
    let index = value.charCodeAt() % 65;
    if (value.toLowerCase() === value) {
      index -= 6;
    }
    ans[index] += 1;
  });
  return ans;
}