function solution(sides) {
  var maxVal = Math.max(...sides);
  sides.splice(sides.indexOf(maxVal), 1);
  let sum = 0;
  for (item of sides) {
    sum += item;
  }
  return sum > maxVal ? 1 : 2;
}