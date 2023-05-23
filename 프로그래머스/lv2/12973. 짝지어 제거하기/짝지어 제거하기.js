function solution(s) {
  let stack = []; // 스택 자료구조

  if (s.length % 2 != 0) return 0;
  // 매개변수 문자열 순회
  [...s].forEach((value) => {
    // 스택이 비어있지 않고 스택 맨 위 값이 현재 값과 같다면
    if (stack.length && stack[stack.length - 1] === value) {
      stack.pop();
    } else {
      stack.push(value);
    }
  });

  return stack.length === 0 ? 1 : 0;
}