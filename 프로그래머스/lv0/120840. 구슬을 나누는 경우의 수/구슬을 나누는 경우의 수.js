function solution(balls, share) {
  return fact(balls) / (fact(balls - share) * fact(share));
}

const fact = (n) => {
  let big = BigInt(n);
  if (big > BigInt(0)) {
    return big * fact(big - BigInt(1));
  } else {
    return BigInt(1);
  }
};