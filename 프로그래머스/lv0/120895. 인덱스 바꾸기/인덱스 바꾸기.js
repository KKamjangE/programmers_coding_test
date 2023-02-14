function solution(my_string, num1, num2) {
  arr = [...my_string];
  const Num1 = arr[num1];
  arr.splice(num1, 1, arr[num2]);
  arr.splice(num2, 1, Num1);
  return arr.join("");
}