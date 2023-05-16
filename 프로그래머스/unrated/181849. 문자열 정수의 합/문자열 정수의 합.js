function solution(num_str) {
  return [...num_str].reduce((prev, curr) => prev + Number(curr), 0);
}