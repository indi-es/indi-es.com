export type CellProps<TValue> = {
  cell: {
    getValue: () => TValue;
  };
};
