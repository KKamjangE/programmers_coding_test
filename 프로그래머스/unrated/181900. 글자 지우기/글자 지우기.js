function solution(my_string, indices) {
  let my_stringToArr = my_string.split("");
  indices.forEach((value) => {
    my_stringToArr.splice(value, 1, "");
  });

  return my_stringToArr.join("");
}