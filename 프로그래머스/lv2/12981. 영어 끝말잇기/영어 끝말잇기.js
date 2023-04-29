function solution(n, words) {
  let ans = [0, 0];
  let obj = {};
  let check = false;
  obj[words[0]] = 0;

  for (let i = 1; i < words.length; i++) {
    prev = words[i - 1];
    curr = words[i];
    if (prev.split("")[prev.length - 1] != curr.split("")[0]) {
      check = true;
    } else if (obj[curr] === undefined) {
      obj[curr] = 0;
    } else {
      check = true;
    }

    if (check) {
      ans[0] = (i % n) + 1;
      ans[1] = Math.floor(i / n) + 1;
      break;
    }
  }

  return ans;
}