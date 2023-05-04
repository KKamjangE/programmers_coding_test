function solution(my_string, s, e) {
  let my_stringToArr = my_string.split("");
  let tmp = my_string.slice(s, e + 1).split("");
  my_stringToArr.splice(s, tmp.length, ...tmp.reverse());
  return my_stringToArr.join("");
}