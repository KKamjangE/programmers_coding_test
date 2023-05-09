function solution(num_list) {
  let odd = 0;
  let even = 0;
  num_list.forEach((value, idx) => {
    if ((idx + 1) % 2 === 0) {
      even += value;
    } else {
      odd += value;
    }
  });
  return even > odd ? even : odd;
}