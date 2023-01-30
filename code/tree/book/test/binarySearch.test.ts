import BinarySearchTree from "../tree";

describe("BinarySearch.test", () => {
  it("should create empty tree", () => {
    const tree = new BinarySearchTree<number>();
    expect(tree.root).toBeNull();
    tree.insert(11);
    tree.insert(7);
    tree.insert(15);
  });

  const fn = (key) => console.log(key);
  const tree = new BinarySearchTree<number>();
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);
  tree.insert(6);

  // it("inOrderTraverse", () => {
  //   tree.inOrderTraverse(fn);
  // });

  // it("prevOrderTraverse", () => {
  //   tree.prevOrderTraverse(fn);
  // });

  it("postOrderTraverse", () => {
    tree.postOrderTraverse(fn);
  });
});
