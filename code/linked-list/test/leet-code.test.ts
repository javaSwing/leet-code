import LinkedList from '../book/linked-list';
import { reverseList } from '../reverse-linked-list';

describe('leet code linked list test', () => {
  it('test reverse linked list by leet code 206', () => {
    const linkedList = new LinkedList<number>();

    linkedList.push(1);
    linkedList.push(4);
    linkedList.push(6);
    linkedList.push(-1);

    expect(linkedList.toString()).toBe('1,4,6,-1');

    expect(reverseList(linkedList.head)?.val).toBe(-1);
  });
});
