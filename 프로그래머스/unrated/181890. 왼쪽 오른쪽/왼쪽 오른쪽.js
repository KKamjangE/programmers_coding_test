function solution(str_list) {
  let ans = [];
  for (let idx = 0; idx < str_list.length; idx++) {
    if (str_list[idx] === "l") {
      ans.push(...str_list.slice(0, idx));
      break;
    } else if (str_list[idx] === "r") {
      ans.push(...str_list.slice(idx + 1));
      break;
    }
  }
  return ans;
}