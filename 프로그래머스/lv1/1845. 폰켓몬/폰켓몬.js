function solution(nums) {
  let arr = [...new Set(nums)];
  const NUM = Math.ceil(nums.length / 2);
  return arr.length > NUM ? NUM : arr.length;
}