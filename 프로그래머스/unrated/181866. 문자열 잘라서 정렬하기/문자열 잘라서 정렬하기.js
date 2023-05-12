function solution(myString) {
  let arr = myString.split("x").filter((value) => value != "");

  return arr.sort();
}