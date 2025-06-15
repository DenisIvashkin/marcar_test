import { SortingType } from '@/lib/types';
import React from 'react';

export const getText = (type: SortingType) => {
  switch (type) {
    case 'desc':
      return (
        <>
          По убыванию <span className="ml-1">↓</span>
        </>
      );
    case 'asc':
      return (
        <>
          По возрастанию <span className="ml-1">↑</span>
        </>
      );
    default:
      return <>По умолчанию</>;
  }
};
