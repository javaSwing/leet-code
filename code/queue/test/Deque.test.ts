import Deque from "../Deque";

describe("Dequeue", () => {
  it("should create empty queue", () => {
    const queue = new Deque();
    expect(queue).not.toBeNull();
    expect(queue.items).not.toBeNull();
  });

  it("should addBack data to queue", () => {
    const queue = new Deque();

    queue.addBack(1);
    queue.addBack(2);

    expect(queue.toString()).toBe("1,2");
  });

  it("should addFont data to queue", () => {
    const queue = new Deque();

    queue.addFront(1);
    queue.addFront(2);

    expect(queue.toString()).toBe("2,1");
  });

  it("removeFront data to queue", () => {
    const queue = new Deque();

    queue.addBack(90);
    queue.addBack(100);

    queue.removeFront();

    expect(queue.toString()).toBe("100");
  });

  it("removeBack data to queue", () => {
    const queue = new Deque();

    queue.addBack(90);
    queue.addBack(100);

    queue.removeBack();

    expect(queue.toString()).toBe("90");
  });

  // it("should be possible to enqueue/dequeue objects", () => {
  //   const queue = new Queue<{ value: string; key: string }>();

  //   queue.enqueue({ value: "test1", key: "key1" });
  //   queue.enqueue({ value: "test2", key: "key2" });

  //   const stringifier = (value) => `${value.key}:${value.value}`;

  //   expect(queue.toString(stringifier)).toBe("key1:test1,key2:test2");
  //   expect(queue.dequeue().value).toBe("test1");
  //   expect(queue.dequeue().value).toBe("test2");
  // });

  // it("should peek data from queue", () => {
  //   const queue = new Queue();

  //   expect(queue.peek()).toBeNull();

  //   queue.enqueue(1);
  //   queue.enqueue(2);

  //   expect(queue.peek()).toBe(1);
  //   expect(queue.peek()).toBe(1);
  // });

  // it("should check if queue is empty", () => {
  //   const queue = new Queue();

  //   expect(queue.isEmpty()).toBe(true);

  //   queue.enqueue(1);

  //   expect(queue.isEmpty()).toBe(false);
  // });

  // it("should dequeue from queue in FIFO order", () => {
  //   const queue = new Queue();

  //   queue.enqueue(1);
  //   queue.enqueue(2);

  //   expect(queue.dequeue()).toBe(1);
  //   expect(queue.dequeue()).toBe(2);
  //   expect(queue.dequeue()).toBeNull();
  //   expect(queue.isEmpty()).toBe(true);
  // });
});
