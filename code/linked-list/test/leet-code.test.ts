import { addTwoNumbers, addTwoNumbers3, addTwoNumbersIterative } from '../add-two-numbers';
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

  it('test addTwoNumbers linked list by leet code 2', () => {
    const linkedList1 = new LinkedList<number>();
    linkedList1.push(9);
    linkedList1.push(9);
    linkedList1.push(9);
    linkedList1.push(9);
    linkedList1.push(9);
    linkedList1.push(9);
    linkedList1.push(9);

    const linkedList2 = new LinkedList<number>();
    linkedList2.push(9);
    linkedList2.push(9);
    linkedList2.push(9);
    linkedList2.push(9);

    const head1 = addTwoNumbersIterative(linkedList1.head, linkedList2.head);

    const head2 = addTwoNumbers(linkedList1.head, linkedList2.head);
    const head3 = addTwoNumbers3(linkedList1.head, linkedList2.head);

    expect(head1?.toString()).toBe('8,9,9,9,0,0,0,1');
    expect(head2?.toString()).toBe('8,9,9,9,0,0,0,1');
    expect(head3?.toString()).toBe('8,9,9,9,0,0,0,1');
  });
});
