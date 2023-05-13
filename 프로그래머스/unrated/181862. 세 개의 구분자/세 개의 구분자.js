function solution(myStr) {
  let str = myStr
    .replace(/a|b|c/g, " ")
    .split(" ")
    .filter((value) => value.length != 0);
  return str.length ? str : ["EMPTY"];
}