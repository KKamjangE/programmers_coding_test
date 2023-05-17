function solution(board, k) {
  let ans = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (j + i <= k) {
        ans += board[i][j];
      }
    }
  }

  return ans;
}