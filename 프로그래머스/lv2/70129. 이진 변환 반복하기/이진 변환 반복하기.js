function solution(s) {
  let zeroCount = 0;
  let trasCount = 0;
  while (true) {
    if (s === "1") {
      break;
    }

    s = s
      .split("")
      .map((value) => {
        if (value === "0") {
          zeroCount += 1;
        } else {
          return value;
        }
      })
      .join("");
    s = s.length.toString(2);
    trasCount += 1;
  }

  return [trasCount, zeroCount];
}