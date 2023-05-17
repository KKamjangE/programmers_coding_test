function solution(myString) {
  return [...myString]
    .map((value) => {
      if (value.charCodeAt() < 108) {
        return "l";
      }
      return value;
    })
    .join("");
}