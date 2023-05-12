function solution(myString, pat) {
  let newArr = myString
    .split("")
    .map((value) => {
      if (value === "A") {
        return "B";
      } else {
        return "A";
      }
    })
    .join("");
  return newArr.includes(pat) ? 1 : 0;
}