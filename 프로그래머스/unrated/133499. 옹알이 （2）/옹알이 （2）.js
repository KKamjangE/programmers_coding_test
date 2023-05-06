function solution(babbling) {
  let ans = 0;
  let arr = ["aya", "ye", "woo", "ma"];

  babbling.forEach((babble) => {
      for(let i=0; i<arr.length;i++){
          if(babble.includes(arr[i].repeat(2))){
              break;
          }
          babble = babble.split(arr[i]).join(" ");
      }
      if(babble.split(" ").join("").length === 0){
          ans += 1
      }
  });

  return ans;
}