function solution(n) {
    let answer = 0;
    for(let a = 0; a <= n; a++){
        if(a%2 == 0){
            answer += a;    
        }
    }
    return answer;
}