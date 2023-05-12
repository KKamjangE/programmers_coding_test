function solution(myString) {
  let arr = myString.split("x");
  return arr.map((value) => {
    return value.length;
  });
}