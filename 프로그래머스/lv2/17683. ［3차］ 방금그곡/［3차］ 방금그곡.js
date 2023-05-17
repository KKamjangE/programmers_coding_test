function solution(m, musicinfos) {
  let ans = [];

  const setTime = (time) => {
    let [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
  };

  musicinfos.forEach((value) => {
    let [start, end, name, code] = value.split(",");
    let time = setTime(end) - setTime(start);
    let codeArr = code.match(/[A-Z]#?/g);
    let stream = code.repeat(Math.floor(time / codeArr.length));
    stream += codeArr.slice(0, time % codeArr.length).join("");
    let idx = stream.indexOf(m);
    while (idx != -1) {
      if (stream[idx + m.length] != "#") {
        ans.push([name, time]);
        break;
      }
      idx = stream.indexOf(m, idx + 1);
    }
  });
  if(ans.length === 0) return "(None)"
  ans.sort((a, b) => b[1] - a[1]);
  return ans[0][0];
}