function solution(num_list, n) {
  let tmp1 = num_list.slice(n);
  let tmp2 = num_list.slice(0, n);
  return [...tmp1, ...tmp2];
}