function solution(numLog) {
  let ans = "";
  let num = 0;
  let controls = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  return numLog
    .slice(1)
    .reduce(
      (acc, cur, idx) => acc + controls[`${numLog[idx + 1] - numLog[idx]}`],
      ""
    );
}