function solution(s) {
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "P" || s[i] == "p") {
      p += 1;
    } else if (s[i] == "y" || s[i] == "Y") {
      y += 1;
    }
  }
  if (p == y) {
    return true;
  } else {
    return false;
  }
}