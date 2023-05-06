function solution(n, slicer, num_list) {
  let [a, b, c] = slicer;
  if (n === 1) {
    num_list = num_list.slice(0, b + 1);
  }
  if (n === 2) {
    num_list = num_list.slice(a);
  }
  if (n === 3) {
    num_list = num_list.slice(a, b + 1);
  }
  if (n === 4) {
    num_list = num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
  }
  return num_list;
}