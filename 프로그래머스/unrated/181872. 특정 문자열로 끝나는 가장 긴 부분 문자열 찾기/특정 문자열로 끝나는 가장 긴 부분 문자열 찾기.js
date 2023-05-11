function solution(myString, pat) {
  let idx = myString.lastIndexOf(pat);
  return [...myString].slice(0, idx + pat.length).join("");
}