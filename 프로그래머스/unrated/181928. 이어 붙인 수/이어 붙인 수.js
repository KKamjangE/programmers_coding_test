function solution(num_list) {
  let even = "";
  let odd = "";
  num_list.forEach((value) => {
    value + "";
    if (parseInt(value) % 2 === 0) {
      even += value;
    } else {
      odd += value;
    }
  });
  return parseInt(even) + parseInt(odd);
}