import {
  createSortedRowModel,
  rowSortingFeature,
  sortFn_alphanumericCaseSensitive as alphanumericCaseSensitive,
  tableFeatures,
} from '@tanstack/react-table';

export const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumericCaseSensitive },
});

export type Features = typeof features;
