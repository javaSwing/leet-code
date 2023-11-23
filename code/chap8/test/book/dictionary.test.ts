import Dictionary from '../../book/dictionary';

describe('test dictionary', () => {
  it('test dictionary hasKey', () => {
    const d = new Dictionary<string, number>();

    expect(d.hasKey('our')).toBeFalsy();
  });

  it('test dictionary set', () => {
    const d = new Dictionary<string, number>();
    d.set('test', 1);
    expect(d.toString()).toBe(`[test: 1]`);
  });

  it('test dictionary remove', () => {
    const d = new Dictionary<string, number>();
    d.set('test', 1);
    expect(d.remove).toBeTruthy();
  });

  it('test dictionary get', () => {
    const d = new Dictionary<string, number>();
    d.set('javaswing', 1);
    expect(d.get('javaswing')).toBe(1);
  });
});
