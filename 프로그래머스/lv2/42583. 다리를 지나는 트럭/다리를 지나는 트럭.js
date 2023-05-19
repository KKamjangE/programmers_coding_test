function solution(bridge_length, weight, truck_weights) {
  let time = 1;

  let bridge = new Array(bridge_length).fill(0); // 다리길이만큼 배열 생성
  let bridge_weight = truck_weights[0]; // 다리가 버티고 있는 무게, 0번째 트럭무게 추가
  bridge[bridge_length - 1] = truck_weights.shift(); // 0번째 트럭 다리에 진입

  while (bridge_weight > 0) {
    bridge_weight -= bridge.shift(); // 다리에서 지나간 트럭 무게 빼기(트럭 없으면 0)
    if (bridge_weight + truck_weights[0] <= weight) {
      // 현재 다리의 무게 + 다음 트럭 무게가 버틸 수 있는 무게 이하일 경우
      bridge_weight += truck_weights[0]; // 트럭 무게 더하기
      bridge.push(truck_weights.shift()); // 다리에 트럭 진입
    } else {
      bridge.push(0); // 트럭 대신 0 추가
    }
    time += 1; // 시간 ++
  }

  return time;
}