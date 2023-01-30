import BinarySearchTree from "../tree";

describe("BinarySearch.test", () => {
  it("should create empty tree", () => {
    const tree = new BinarySearchTree<number>();
    expect(tree.root).toBeNull();

    tree.insert(11);
    tree.insert(7);
    tree.insert(15);

    console.log("tree", tree);
  });
});
