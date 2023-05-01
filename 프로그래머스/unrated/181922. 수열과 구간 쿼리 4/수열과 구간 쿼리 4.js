function solution(arr, queries) {
  queries.forEach((value) => {
    let [s, e, k] = value;
    arr = arr.map((value, idx) =>
      s <= idx && idx <= e && idx % k === 0 ? value + 1 : value
    );
  });
  return arr;
}