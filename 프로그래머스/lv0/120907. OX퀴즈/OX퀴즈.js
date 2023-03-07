function solution(quiz) {
  let ar = [];

  const math = (v) => {
    const arr = v.split(" ");
    let ans = Number(arr[0]);
    arr.forEach((item, index) => {
      if (item === "+") {
        ans += Number(arr[index + 1]);
      }
      if (item === "-") {
        ans -= Number(arr[index + 1]);
      }
      if (item === "=") {
        if (Number(arr[index + 1]) === ans) {
          ar.push("O");
        } else {
          ar.push("X");
        }
      }
    });
  };
  quiz.map((item) => math(item));
  return ar;
}