export const defaultEquals = (a, b) => {
  return a === b;
};

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

export const defaultCompare = (a, b) => {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.LESS_THAN;
};
