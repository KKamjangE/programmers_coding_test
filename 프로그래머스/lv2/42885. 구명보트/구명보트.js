function solution(people, limit) {
  let boat = 0;
  people.sort((a, b) => a - b);

  let a = 0;
  let b = people.length - 1;
  while (a < b) {
    if (people[a] + people[b] <= limit) {
      boat++;
      a++;
      b--;
    } else {
      b--;
    }
  }

  return people.length - boat;
}