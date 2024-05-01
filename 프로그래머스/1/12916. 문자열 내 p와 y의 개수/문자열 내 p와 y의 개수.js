function solution(s) {
  let p = 0
  let y = 0
  s.split('').forEach((item) => {
      if(item === 'p' || item === 'P') p += 1
      if(item === 'y' || item === 'Y') y += 1
  })
    
    return p === y 
}