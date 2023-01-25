function solution(age) {
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let newAge = age + "";
  return newAge
    .split("")
    .map((curr) => abc[curr])
    .join("");
}