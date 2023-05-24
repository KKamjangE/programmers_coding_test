function solution(people, limit) {
  let ans = 0;
  people.sort((a, b) => a - b);
  left = 0;
  right = people.length - 1;
  while (left < right) {
    if (people[left] + people[right] <= limit) {
      ans++;
      left++;
      right--;
    } else {
      right--;
    }
  }
  return people.length - ans;
}