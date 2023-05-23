function solution(dirs) {
  let ans = new Set(); // 중복 제거를 위한 Set() 자료구조 사용

  // 명령어
  let control = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  let now = [0, 0]; // 초기 위치

  // 매개변수 순회
  [...dirs].forEach((value) => {
    let moveX = now[0] + control[value][0]; // 이동하는 X 좌표
    let moveY = now[1] + control[value][1]; // 이동하는 Y 좌표

    // 11 * 11 보드를 벗어났는지 확인
    if (-5 <= moveX && moveX <= 5 && -5 <= moveY && moveY <= 5) {
      // 현재 위치에서 다음 위치로 이동하는 길 저장
      ans.add("" + now[0] + now[1] + moveX + moveY);
      // 다음 위치에서 현재 위치로 이동하는 길 저장
      ans.add("" + moveX + moveY + now[0] + now[1]);

      now = [moveX, moveY]; // 현재 위치를 다음 위치로 갱신
    }
  });

  return ans.size / 2; // 양방향으로 저장했기 때문에 2로 나눈다.
}