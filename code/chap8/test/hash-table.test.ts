import HashTable from '../book/hash-table';

describe('test hash table', () => {
  it('test constructor', () => {
    const hashTable = new HashTable();

    expect(hashTable.toString()).toBe('');
  });

  it('test put element', () => {
    const hashTable = new HashTable();
    hashTable.put(15, 'zxdlovejava@gmail.com');

    expect(hashTable.toString()).toBe('15 => [15: zxdlovejava@gmail.com]');
  });

  it('test get element', () => {
    const hashTable = new HashTable();
    hashTable.put(19, 'z32323@gmail.com');

    expect(hashTable.get(19)).toBe('z32323@gmail.com');
  });

  it('test rm element', () => {
    const hashTable = new HashTable();
    hashTable.put(19, 'z32323@gmail.com');

    hashTable.remove(19);

    expect(hashTable.toString()).toBe('');
  });
});
