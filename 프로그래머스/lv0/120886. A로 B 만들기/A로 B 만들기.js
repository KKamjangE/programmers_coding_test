function solution(before, after) {
  let sortBefore = before.split("").sort().join("");
  let sortAfter = after.split("").sort().join("");

  if (sortBefore === sortAfter) {
    return 1;
  }

  return 0;
}