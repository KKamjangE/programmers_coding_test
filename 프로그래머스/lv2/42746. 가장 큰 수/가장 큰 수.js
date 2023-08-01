function solution(numbers) {
  const ans = numbers.map((num) => num + ""); // 문자열로 변환
  ans.sort((a, b) => b + a - (a + b)); // 두 요소를 조합했을 때 더 큰 수로 정렬

  if (ans[0] == "0") {
    return "0"; // 맨 앞의 수가 0이라면 "0" 출력
  } else {
    return ans.join(""); // 배열 합쳐서 출력
  }
}