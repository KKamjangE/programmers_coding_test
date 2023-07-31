function solution(nums) {
  const obj = new Set();

  nums.forEach((value) => {
    obj.add(value);
  });

  if (obj.size > nums.length / 2) {
    return nums.length / 2;
  } else {
    return obj.size;
  }
}