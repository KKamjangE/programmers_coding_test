function solution(arr, delete_list) {
  return arr.filter((value) => !delete_list.includes(value));
}