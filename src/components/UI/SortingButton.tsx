import { SortingType } from '@/lib/types';
import { getText } from '@/lib/constants';
import React from 'react';

interface Props {
  handleSortChange: (newOrder: SortingType) => void;
  order: string | undefined;
  type: SortingType;
}

const SortingButton = ({ handleSortChange, order, type }: Props) => {
  const text = getText(type);

  return (
    <button
      onClick={() => handleSortChange(type)}
      className={`flex items-center w-full px-4 py-2 text-left text-black hover:bg-gray-100 cursor-pointer
                                    ${order === type ? 'bg-blue-50 font-medium' : ''}`}
    >
      {text}
    </button>
  );
};

export default SortingButton;
