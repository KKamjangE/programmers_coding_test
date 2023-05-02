function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  let obj = {};

  arr.forEach((value) => {
    if (obj[value] === undefined) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }
  });

  let objLen = Object.values(obj).length;

  if (objLen === 1) {
    return 1111 * a;
  } else if (objLen === 2) {
    let p, q;
    let check = true;
    Object.entries(obj).forEach((entrie) => {
      [key, value] = entrie;
      if (value === 3) {
        p = Number(key);
      } else if (value === 1) {
        q = Number(key);
      } else {
        check = false;
        q = Number(Math.min(...arr));
        p = Number(Math.max(...arr));
      }
    });
    if (check) {
      return (10 * p + q) ** 2;
    } else {
      return (p + q) * Math.abs(p - q);
    }
  } else if (objLen === 3) {
    let tmp = Object.entries(obj).filter((value) => value[1] < 2);
    let [q, r] = tmp.map((value) => value[0]);
    return q * r;
  } else if (objLen === 4) {
    return Math.min(...arr);
  }
}