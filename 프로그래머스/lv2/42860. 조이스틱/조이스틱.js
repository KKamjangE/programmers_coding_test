function solution(name) {
  let ans = 0;
  let move = name.length - 1;

  [...name].forEach((value, i) => {
    let code = value.charCodeAt();
    ans += Math.min(code - 65, 91 - code);

    let idx = i + 1;

    while (idx < name.length && name[idx] === "A") {
      idx += 1;
    }

    move = Math.min(
      move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    );
  });

  return ans + move;
}