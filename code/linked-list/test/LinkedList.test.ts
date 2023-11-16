import LinkedList from '../book/linked-list';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.head).toBeUndefined();
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.toString()).toBe('1,2');
  });

  it('should removeAt node by index linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);

    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('1');
  });

  it('should getElementAt by index linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);

    const v = linkedList.getElementAt(1);
    expect(v?.val).toBe(2);
  });

  it('should insert by index linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);

    linkedList.insert(4, 1);
    expect(linkedList.toString()).toBe('1,4,2');
  });

  it('should indexOf linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);

    const i = linkedList.indexOf(2);
    expect(i).toBe(1);
  });

  it('should remove linked list', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.push(2);

    linkedList.remove(2);
    expect(linkedList.toString()).toBe('1');
  });
});
