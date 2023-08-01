function solution(brown, yellow) {
    let height = 1; // 높이 1부터 시작
    let width = yellow / height; // 높이에 따른 yellow 넓이 설정
    while(width >= height) { // 높이가 넓이를 넘어가지 않을 때
        if(brown === (width + 2) * 2 + height * 2){
            return [width + 2, height + 2];
        } else {
            height += 1; // 높이 + 1
            width = yellow / height; // 높이 변화에 따른 넓이 수정
        }
    }
}