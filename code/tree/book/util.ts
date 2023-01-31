export const enum COMPARE_ENUM {
  LESS_THAN,
  BIGGER_THAN,
  EQ,
}

export function defaultCompare(firstKey: unknown, secondKey: unknown) {
  if (secondKey < firstKey) return COMPARE_ENUM.LESS_THAN;
  if (secondKey > firstKey) return COMPARE_ENUM.BIGGER_THAN;
  return COMPARE_ENUM.EQ;
}

export type CompareType = typeof defaultCompare;
