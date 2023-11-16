import DoublyLinkedList from "../book/doubly-linked-list/doubly-linked-list";

describe('doubly linked list', () => {
  it('should create empty doubly linked list', () => {
    const linkedList = new DoublyLinkedList<number>();
    expect(linkedList.toString()).toBe('');
  });

  it('test insert doubly linked list', () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList.push(2);
    linkedList.push(5);
    linkedList.push(7);
    linkedList.insert(1, 1)
    expect(linkedList.toString()).toBe("2,1,5,7");
  });
});
