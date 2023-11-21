import LinkedList from '../book/linked-list';
import { sortList } from '../sort-list';

describe('sort-list test', () => {
  it('should create empty doubly linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(4);
    linkedList.push(2);
    linkedList.push(1);
    linkedList.push(3);
    expect(linkedList.toString()).toBe('4,2,1,3');

    const sortHead = sortList(linkedList.head);

    expect(sortHead?.val).toBe(1);
  });
});
