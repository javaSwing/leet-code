import HashTable from '../book/hash-table';
import HashTableSeParateChaining from '../book/hash-table/hash-table-separate-chaining';

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

  it('test HashTableSeParateChaining', () => {
    const ht = new HashTableSeParateChaining();

    ht.put(1, 'javaswing');
    ht.put(1, 'chenfeng');
    expect(ht.toString()).toBe('1 => [1: javaswing],[1: chenfeng]');

    expect(ht.get(1)).toBe('javaswing');

    ht.remove(1);
    expect(ht.toString()).toBe('');
  });
});
