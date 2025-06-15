import React, { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text?: string;
}

const CarFeature = ({ icon, text }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <p className="text-gray-800">{text || '—'}</p>
      </div>
    </div>
  );
};

export default CarFeature;
