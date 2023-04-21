function solution(arr) {
  return arr.reduce(
    (prev, curr) => [...prev, ...new Array(curr).fill(curr)],
    []
  );
}