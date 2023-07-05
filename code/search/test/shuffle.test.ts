import shuffle from '../shuffle';

describe('test shuffle', () => {
  it('test shuffle method', () => {
    const source = [1, 5, 6];
    shuffle(source);
    expect([1, 5, 6]).not.toEqual(source);
  });
});
