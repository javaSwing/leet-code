import { default as BinarySearchTree } from '../binary-search-tree';

describe('BinarySearch.test', () => {
  let tree: BinarySearchTree;
  beforeEach(() => {
    tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
  });

  it('should create empty tree', () => {
    expect(tree.root).toBeNull();
  });

  it('inOrderTraverse', () => {
    const res: number[] = [];
    const fn = (key) => {
      res.push(key);
    };

    tree.inOrderTraverse(fn);

    expect(res.toString()).toBe('5,7,11,15');
  });

  it('preOrderTraverse', () => {
    const res: number[] = [];
    const fn = (key) => {
      res.push(key);
    };
    tree.preOrderTraverse(fn);

    expect(res.toString()).toBe('11,7,5,15');
  });

  it('postOrderTraverse', () => {
    const res: number[] = [];
    const fn = (key) => {
      res.push(key);
    };
    tree.postOrderTraverse(fn);
    expect(res.toString()).toBe('5,7,15,11');
  });

  it('min', () => {
    const mi = tree.min();
    expect(mi?.key).toBe(5);
  });

  it('max', () => {
    const max = tree.max();
    expect(max?.key).toBe(15);
  });

  it('search', () => {
    const target = tree.search(11);
    expect(target).toBe(true);
  });

  it('remove', () => {
    tree.remove(5);
    console.log('tree.remove(5)', tree.root);
    expect(tree.root?.left?.left).toBeNull();
  });
});
