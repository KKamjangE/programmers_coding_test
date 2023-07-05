function solution(numbers) {
  let ans = new Set(); // 중복 제거용 Set

  const prime = (num) => {
    // 소수 판별 함수
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const DFS = (numArr, fixNum) => {
    if (numArr.length === 0) return; // 남은 숫자가 더이상 없다면 return

    for (let i = 0; i < numArr.length; i++) {
      // 숫자 배열 순회
      if (prime(parseInt(fixNum + numArr[i]))) {
        // 소수 인지 판별해서 맞다면 ans에 추가
        ans.add(parseInt(fixNum + numArr[i]));
      }

      const tmp = [...numArr]; // 현재 문자 배열 복사
      tmp.splice(i, 1); // 숫자 배열 중 현재 숫자 제거
      DFS(tmp, fixNum + numArr[i]); // 남은 숫자 배열, 현재 숫자 고정
    }
  };

  DFS(numbers.split(""), "");

  return ans.size; // Set에 담긴 소수 개수 반환
}