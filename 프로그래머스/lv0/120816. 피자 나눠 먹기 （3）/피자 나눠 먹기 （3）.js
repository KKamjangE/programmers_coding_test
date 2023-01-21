function solution(slice, n) {
  for (let pizza = 1; pizza <= n; pizza++) {
    if (slice * pizza >= n) {
      return pizza;
    }
  }
}