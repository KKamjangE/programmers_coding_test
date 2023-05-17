function solution(picture, k) {
  let ans = [];
  picture.forEach((value) => {
    for (let i = 0; i < k; i++) {
      ans.push(
        [...value]
          .map((val) => {
            return val.repeat(k);
          })
          .join("")
      );
    }
  });

  return ans;
}