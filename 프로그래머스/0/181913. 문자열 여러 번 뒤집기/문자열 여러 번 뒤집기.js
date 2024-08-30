function solution(my_string, queries) {
  let my_stringToArr = my_string.split("");
  queries.forEach(([s, e]) => {
    let tmp = my_stringToArr.slice(s, e + 1);
    my_stringToArr.splice(s, tmp.length, ...tmp.reverse());
  });
  return my_stringToArr.join("");
}