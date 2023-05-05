function solution(players, callings) {
  const obj = new Map();

  players.forEach((value, idx) => {
    obj.set(value, idx);
  });

  callings.forEach((value) => {
    let currIdx = obj.get(value);
    let front = players[currIdx - 1];

    [players[currIdx], players[currIdx - 1]] = [
      players[currIdx - 1],
      players[currIdx],
    ];

    obj.set(value, obj.get(value) - 1);
    obj.set(front, obj.get(value) + 1);
  });

  return players;
}