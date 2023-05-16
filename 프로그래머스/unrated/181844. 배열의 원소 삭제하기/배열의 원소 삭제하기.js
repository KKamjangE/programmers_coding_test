function solution(arr, delete_list) {
  return arr
    .map((value) => {
      if (!delete_list.includes(value)) {
        return value;
      }
    })
    .filter((value) => value != undefined);
}