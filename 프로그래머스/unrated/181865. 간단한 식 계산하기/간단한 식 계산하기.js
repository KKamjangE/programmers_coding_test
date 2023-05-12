function solution(binomial) {
  [a, op, b] = binomial.split(" ");
  if (op === "+") {
    return Number(a) + Number(b);
  } else if (op === "-") {
    return Number(a) - Number(b);
  } else if (op === "*") {
    return Number(a) * Number(b);
  }
}