function solution(arr, queries) {
  queries.forEach((value) => {
    let [i, j] = value;
    let [tmpi, tmpj] = [arr[i], arr[j]];
    arr.splice(i, 1, tmpj);
    arr.splice(j, 1, tmpi);
  });
  return arr;
}