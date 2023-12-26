/**
 * LCR 120. 寻找文件副本
 * @param documents
 * @returns
 *
 * 时间 O(n)
 * 空间 O(n)
 */
function findRepeatDocument(documents: number[]): number {
  const map = new Set();
  for (const n of documents) {
    if (!map.has(n)) {
      map.add(n);
    } else {
      return n;
    }
  }
  return -1;
}
