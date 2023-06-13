function solution(numbers) {
  let ans = new Set(); // 중복 제거용 Set 자료구조
  
  // 소수 판별 함수
  const check = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const DFS = (numArr, currNum) => {
    if (numArr.length) { // 배열의 요소가 1개라도 있다면
      for (let i = 0; i < numArr.length; i++) {
        if (check(parseInt(currNum + numArr[i]))) { // 소수 판별
          ans.add(parseInt(currNum + numArr[i])); // 소수면 추가
        }
        const newNumArr = [...numArr]; // 배열 복사
        newNumArr.splice(i, 1); // 맨 앞의 배열을 자른다
        DFS(newNumArr, currNum + numArr[i]); // 재귀
      }
    }
  };

  DFS(numbers.split(""), ""); // numbers배열과 빈 문자열을 인자로 넘김

  return ans.size; // 중복이 모두 제거됐기 때문에 길이로 넘겨준다
}