function solution(begin, target, words) {
  var ans = 0;
  visited = Array.from({ length: words.length }, (_) => false);

  const bfs = (word, start) => {
    que = [[word, start]];

    while (que.length > 0) {
      let [q, count] = que.shift();
      if (q === target) {
        ans = count;
        break;
      }
      for (i in words) {
        let tmp = 0;
        for (let j = 0; j < words[i].length; j++) {
          if (q[j] != words[i][j]) {
            tmp += 1;
          }
        }
        if (tmp === 1 && visited[i] === false) {
          visited[i] = true;
          que.push([words[i], count + 1]);
        }
      }
    }
  };

  bfs(begin, 0);

  return ans;
}