export const defaultEquals = (a, b) => {
  return a === b;
};

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

export const defaultCompare = (a, b) => {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

export const defaultToString = (v: any): string => {
  if (v === null) {
    return 'NULL';
  } else if (v === undefined) {
    return 'UNDEFINED';
  } else if (typeof v === 'string' || v instanceof String) {
    return `${v}`;
  }
  return v.toString();
};
