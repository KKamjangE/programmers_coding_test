function solution(phone_book) {
  const obj = {};

  phone_book.forEach((phoneNumber) => {
    // 해시 목록 저장
    obj[phoneNumber] = 1;
  });

  for (let phoneNumber of phone_book) {
    // 전화번호 순회
    let temp = ""; // 접두사 비교할 변수

    for (let i = 0; i < phoneNumber.length; i++) {
      // 현재 전화번호 순회
      temp += phoneNumber[i]; // 전화번호 앞에서 부터 하나씩 붙이기

      if (obj[temp] && temp != phoneNumber) {
        // 해시 목록에 번호가 존재하고 현재 전화번호와 다르다면 접두사
        return false;
      }
    }
  }

  return true;
}