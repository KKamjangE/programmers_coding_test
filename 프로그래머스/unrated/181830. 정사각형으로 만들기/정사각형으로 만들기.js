function solution(arr) {
  let height = arr.length;
  let width = arr[0].length;

  if (height < width) {
    let newArr = new Array(width).fill(0);
    for (let i = 0; i < width - height; i++) {
      arr.push(newArr);
    }
  } else if (width < height) {
    let newArr = new Array(height - width).fill(0);
    arr = arr.map((value) => {
      value.push(...newArr);
      return value;
    });
  }

  return arr;
}