function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i <= num_list.length - n; i += n) {
    answer.push(num_list.slice(i, i + n));
    console.log(i, i + n);
  }
  return answer;
}