import { describe, expect, it } from "@jest/globals";
import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");
  });

  it("should append node to linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe("1,2");
    expect(linkedList.tail.next).toBeNull();
  });

  it("should prepend node to linked list", () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.toString()).toBe("2");
    expect(linkedList.tail.toString()).toBe("2");

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe("3,2,1");
  });

  it("should insert node to linked list", () => {
    const linkedList = new LinkedList();

    linkedList.insert(4, 3);
    expect(linkedList.head.toString()).toBe("4");
    expect(linkedList.tail.toString()).toBe("4");

    linkedList.insert(3, 2);
    linkedList.insert(2, 1);
    linkedList.insert(1, -7);
    linkedList.insert(10, 9);

    expect(linkedList.toString()).toBe("1,4,2,3,10");
  });
});
