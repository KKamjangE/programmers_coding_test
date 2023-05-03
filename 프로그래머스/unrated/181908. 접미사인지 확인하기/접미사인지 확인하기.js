function solution(my_string, is_suffix) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string.split("").slice(-i).join(""));
  }
  if (arr.find((value) => value === is_suffix)) {
    return 1;
  } else {
    return 0;
  }
}