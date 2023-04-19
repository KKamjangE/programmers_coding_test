function solution(bridge_length, weight, truck_weights) {
  let time = 1;

  let bridge = new Array(bridge_length).fill(0);
  let bridge_weight = truck_weights[0];
  bridge[bridge_length - 1] = truck_weights.shift();

  while (bridge_weight > 0) {
    bridge_weight -= bridge.shift();
    if (bridge_weight + truck_weights[0] <= weight) {
      bridge_weight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
    time++;
  }

  return time;
}