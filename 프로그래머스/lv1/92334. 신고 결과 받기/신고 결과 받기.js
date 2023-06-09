function solution(id_list, report, k) {
  let ans = {}; // 처리 결과 메일을 받은 횟수
  let reportObj = {}; // 신고 받은 횟수

  report = [...new Set(report)]; // 중복된 신고 제거

  id_list.forEach((value) => {
    // 객체 초기화
    reportObj[value] = 0;
    ans[value] = 0;
  });

  report.forEach((value) => {
    // 신고 받은 횟수 카운팅
    const [_, target] = value.split(" ");
    reportObj[target] += 1;
  });

  report.forEach((value) => {
    let [reporter, target] = value.split(" ");
    if (reportObj[target] >= k) {
      // 신고자가 신고한 타겟이 이용 정지라면 받은 이메일 횟수 추가
      ans[reporter] += 1;
    }
  });

  return Object.values(ans); // 받은 메일 횟수만 배열로 반환
}