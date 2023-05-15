function solution(n, info) {
  let ans = Array(11).fill(0); // 점수판 초기화
  let max = 0; // 가장 큰 차이값

  const DFS = (apeachScore, ryanScore, arrow, pointIdx, scoreBoard) => {
    if (n < arrow) return; // 화살을 다 소비했을 경우

    if (pointIdx > 10) {
      // 모든 점수판을 다 탐색한 경우
      let diff = ryanScore - apeachScore; // 차이값 계산
      if (max < diff) {
        // 계산된 차이값이 더 크다면
        scoreBoard[10] = n - arrow; // 남은 화살 수 1점에 다 추가
        max = diff; // 가장 큰 값으로 변경
        ans = scoreBoard; // 결과 점수판 반영
      }
      return;
    }

    if (n > arrow) {
      // 화살이 아직 남았다면
      // 라이언이 점수를 얻는다 (밑의 어피치가 점수를 얻는 경우를 뛰어 넘음)
      let newScoreBoard = [...scoreBoard]; // 새로운 점수판
      newScoreBoard[10 - pointIdx] = info[10 - pointIdx] + 1; // 현재 점수에 어피치가 쏜 화살 수 보다 1개 더 추가
      DFS(
        apeachScore,
        ryanScore + pointIdx, // 라이언이 해당 점수를 가져감
        arrow + info[10 - pointIdx] + 1, // 소비된 화살 수 더하기
        pointIdx + 1, // 다음 점수로
        newScoreBoard // 새로운 점수판
      );
    }

    if (info[10 - pointIdx] > 0) {
      // 어피치가 점수를 얻는 경우
      DFS(apeachScore + pointIdx, ryanScore, arrow, pointIdx + 1, scoreBoard);
    } else {
      // 둘 다 점수를 얻지 못하는 경우
      DFS(apeachScore, ryanScore, arrow, pointIdx + 1, scoreBoard);
    }
  };

  DFS(0, 0, 0, 0, ans);

  return max <= 0 ? [-1] : ans;
}