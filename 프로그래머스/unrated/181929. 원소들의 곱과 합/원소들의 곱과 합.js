function solution(num_list) {
  return num_list.reduce((prev, curr) => prev * curr, 1) <
    num_list.reduce((prev, curr) => prev + curr, 0) ** 2
    ? 1
    : 0;
}