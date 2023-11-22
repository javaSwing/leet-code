import Set from '../book/set';

describe('test set ', () => {
  it('test set init', () => {
    const set = new Set();

    expect(set.size()).toBe(0);
  });

  it('test union', () => {
    const first = new Set<number>();
    first.add(1);
    first.add(4);
    first.add(5);

    const second = new Set<number>();
    second.add(4);
    second.add(3);
    second.add(1);

    expect(first.union(second).toString()).toBe('1,3,4,5');
  });

  it('test intersection', () => {
    const first = new Set<number>();
    first.add(1);
    first.add(4);
    first.add(5);

    const second = new Set<number>();
    second.add(4);
    second.add(3);
    second.add(1);

    expect(first.intersection(second).toString()).toBe('1,4');
  });

  it('test difference', () => {
    const first = new Set<number>();
    first.add(1);
    first.add(4);
    first.add(5);

    const second = new Set<number>();
    second.add(4);
    second.add(3);
    second.add(1);

    expect(first.difference(second).toString()).toBe('5');
  });

  it('test isSubsetOf', () => {
    const first = new Set<number>();
    first.add(1);
    first.add(4);
    first.add(5);

    const second = new Set<number>();
    second.add(4);
    second.add(3);
    second.add(1);

    expect(first.isSubsetOf(second)).toBe(false);
  });
});
