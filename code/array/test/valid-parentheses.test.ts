import { isValid } from '../valid-parentheses';

describe('valid-parentheses test', () => {
  it('test valid-parentheses method', () => {
    const s = '()';
    const r = isValid(s);
    expect(r).toBeTruthy();
  });
});
