function solution(my_string, alp) {
  return [...my_string]
    .map((value) => {
      if (value === alp) {
        return value.toUpperCase();
      } else {
        return value;
      }
    })
    .join("");
}