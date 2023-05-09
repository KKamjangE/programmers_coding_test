function solution(n, k, enemy) {
  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const curRound = enemy.slice(0, mid).sort((a, b) => b - a);
    let skill = k;
    const curEnemy = curRound.reduce((prev, curr) => {
      if (skill) {
        skill--;
        return prev;
      }
      return prev + curr;
    }, 0);

    if (n - curEnemy >= 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left - 1;
}