export const enum COMPARE_ENUM {
  LESS_THAN,
  MUCH_THAN,
  EQ,
}

export function defaultCompare(nodeKey: unknown, key: unknown) {
  if (key < nodeKey) return COMPARE_ENUM.LESS_THAN;
  if (key > nodeKey) return COMPARE_ENUM.MUCH_THAN;
  return COMPARE_ENUM.EQ;
}

export type CompareType = typeof defaultCompare;
