function solution(numbers) {
  let ans = new Set(); // 중복 제거용 Set 자료구조

  // 소수 판별
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const DFS = (numArr, currNum) => {
    if (numArr.length) {
      // 배열 요소가 1개 이상일 때
      for (let i = 0; i < numArr.length; i++) {
        if (isPrime(parseInt(currNum + numArr[i]))) {
          // 소수가 맞다면
          ans.add(parseInt(currNum + numArr[i])); // Set 객체에 현재 숫자 추가
        }
        const newNumArr = [...numArr]; // 새로운 배열로 복사
        newNumArr.splice(i, 1); // 현재 요소 삭제
        DFS(newNumArr, currNum + numArr[i]); // 새로운 배열, 현재 요소를 더한 문자열
      }
    }
  };

  DFS(numbers.split(""), ""); // 매개변수 문자열을 배열로, 소수를 판별용 빈 문자열

  return ans.size; // Set 객체의 길이 반환(중복 제거)
}