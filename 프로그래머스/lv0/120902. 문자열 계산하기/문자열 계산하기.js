function solution(my_string) {
  const arr = my_string.split(" ");
  let ans = Number(arr[0]);
  arr.forEach((item, index) => {
    if (item === "+") {
      ans += Number(arr[index + 1]);
    }
    if (item === "-") {
      ans -= Number(arr[index + 1]);
    }
  });
  return ans;
}