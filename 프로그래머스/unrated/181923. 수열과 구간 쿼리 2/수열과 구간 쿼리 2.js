function solution(arr, queries) {
  var ans = [];
  queries.forEach((value) => {
    let [s, e, k] = value;
    let newArr = arr.slice(s, e + 1);
    let tmp = newArr.filter((value) => value > k);
    tmp.sort((a, b) => a - b);
    ans.push(tmp[0] ? tmp[0] : -1);
  });
  return ans;
}