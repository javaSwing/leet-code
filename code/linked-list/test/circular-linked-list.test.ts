import CircularLinkedList from '../book/circular-linked-list/circular-linked-list';

describe('circular-linked-list', () => {
  it('should create empty doubly linked list', () => {
    const linkedList = new CircularLinkedList<number>();
    expect(linkedList.toString()).toBe('');
  });

  it('test insert doubly linked list', () => {
    const linkedList = new CircularLinkedList<number>();
    linkedList.push(2);
    linkedList.push(5);
    linkedList.push(7);
    linkedList.insert(1, 1);
    linkedList.insert(10, 0);
    expect(linkedList.toString()).toBe('10,2,1,5,7');
  });

  it('test removeAt doubly linked list', () => {
    const linkedList = new CircularLinkedList<number>();
    linkedList.push(2);
    linkedList.push(5);
    linkedList.push(7);
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('2,7');
  });
});
