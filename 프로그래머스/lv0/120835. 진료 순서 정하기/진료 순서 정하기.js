function solution(emergency) {
  const newEmer = [...emergency].sort((a, b) => b - a);
  return emergency.map((curr) => newEmer.indexOf(curr) + 1);
}