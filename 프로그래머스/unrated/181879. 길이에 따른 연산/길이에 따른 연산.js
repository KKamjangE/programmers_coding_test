function solution(num_list) {
  if (num_list.length > 10) {
    return num_list.reduce((prev, curr) => prev + curr, 0);
  } else {
    return num_list.reduce((prev, curr) => prev * curr, 1);
  }
}