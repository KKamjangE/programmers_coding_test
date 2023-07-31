function solution(participant, completion) {
    const obj = {};
    
    participant.forEach((value) => {
        if(!obj[value]){
            obj[value] = 1;    
        } else {
            obj[value] += 1;
        }
    });
    
    completion.forEach((value) => {
        obj[value] -= 1;
    });
    
    return Object.keys(obj).filter((key) => obj[key] > 0)[0];
}