function solution(array, commands) {
  var ans = [];

  commands.forEach((command) => {
    [i, j, k] = command;
    newArr = array.slice(i - 1, j);
    newArr.sort((a, b) => a - b);
    ans.push(newArr[k - 1]);
  });

  return ans;
}