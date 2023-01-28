function solution(rsp) {
  const rspList = { 2: 0, 0: 5, 5: 2 };
  return rsp
    .split("")
    .map((a) => rspList[a])
    .join("");
}