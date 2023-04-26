class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(item) {
    const node = new Node(item);
    if (!this.length) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    let pop = null;
    if (!this.length) return null;
    else if (this.head === this.tail) {
      pop = this.head.item;
      this.head = null;
      this.tail = null;
    } else {
      pop = this.head.item;
      this.head = this.head.next;
    }
    this.length--;
    return pop;
  }

  size() {
    return this.length;
  }
}

function solution(numbers, target) {
  var ans = 0;

  const BFS = (depth) => {
    let que = new Queue();
    que.enqueue([-numbers[depth], depth + 1]);
    que.enqueue([numbers[depth], depth + 1]);

    while (que.size() > 0) {
      let [sum, dep] = que.dequeue();
      if (sum === target && dep === numbers.length) {
        ans += 1;
      }

      if (dep < numbers.length) {
        que.enqueue([sum + numbers[dep], dep + 1]);
        que.enqueue([sum - numbers[dep], dep + 1]);
      }
    }
  };

  BFS(0);

  return ans;
}