function solution(myString) {
  return [...myString]
    .map((value) => {
      if (value === "a") {
        return "A";
      } else if (value === value.toUpperCase() && value != "A") {
        return value.toLowerCase();
      }
      return value;
    })
    .join("");
}