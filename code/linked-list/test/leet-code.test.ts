import { addTwoNumbers, addTwoNumbers3, addTwoNumbersIterative } from '../add-two-numbers';
import LinkedList from '../book/linked-list';
import { deleteNode } from '../delete-node-in-a-linked-list';
import { removeElements } from '../remove-linked-list-elements';
import { reverseList } from '../reverse-linked-list';
import { reverseBetween2 } from '../reverseBetween';

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

  it('test deleteNode linked list by leet code 237', () => {
    const linkedList1 = new LinkedList<number>();
    linkedList1.push(4);
    linkedList1.push(5);
    linkedList1.push(1);
    linkedList1.push(9);

    const n = linkedList1.getElementAt(2);
    n && deleteNode(n);

    expect(linkedList1.toString()).toBe('4,5,9');
  });

  it('test reverseBetween2 by leet code 92', () => {
    const linkedList1 = new LinkedList<number>();
    linkedList1.push(1);
    linkedList1.push(2);
    linkedList1.push(3);
    linkedList1.push(4);
    linkedList1.push(5);

    const h = reverseBetween2(linkedList1.head, 2, 4);
    expect(h?.toString()).toBe('1,4,3,2,5');
  });

  it('test removeElements by leet code 203', () => {
    const linkedList1 = new LinkedList<number>();
    linkedList1.push(7);
    linkedList1.push(7);
    linkedList1.push(7);
    linkedList1.push(7);

    const h = removeElements(linkedList1.head, 7);
    expect(h?.toString()).toBeUndefined();
  });
});
