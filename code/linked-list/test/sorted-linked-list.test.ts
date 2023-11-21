import { SortedLinkedList } from '../book/sorted-linked-list';

describe('sorted-linked-list', () => {
  it('should create empty sorted linked list', () => {
    const linkedList = new SortedLinkedList<number>();
    expect(linkedList.toString()).toBe('');
  });

  it('test insert sorted linked list', () => {
    const linkedList = new SortedLinkedList<number>();
    linkedList.push(2);
    linkedList.push(1);
    linkedList.push(7);
    linkedList.insert(10);
    expect(linkedList.toString()).toBe('1,2,7,10');
  });

  it('test removeAt sorted linked list', () => {
    const linkedList = new SortedLinkedList<number>();
    linkedList.push(5);
    linkedList.push(2);
    linkedList.push(1);
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('1,5');
  });
});
