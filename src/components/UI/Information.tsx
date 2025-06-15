import React from 'react';
import { BoltIcon, Cog8ToothIcon, PaintBrushIcon, TruckIcon } from '@heroicons/react/16/solid';
import { Car } from '@/lib/types';
import CarFeature from '@/components/UI/CarFeature';

interface CarCardProps {
  car: Car;
}

const Information = ({ car }: CarCardProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent truncate cursor-pointer">
        {car.mark_id} {car.folder_id}
      </h3>
      <div className="mt-4 pt-2 border-t flex gap-4 items-baseline">
        <p className="text-2xl font-bold text-gray-600">{car.price.toLocaleString()} ₽</p>
        <p className="text-1 font-bold text-gray-400">
          от {Math.round(car.price / 30).toLocaleString()} ₽/мес
        </p>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
        {/* Мощность */}
        <CarFeature
          icon={<BoltIcon className="w-5 h-5 text-gray-600" />}
          text={car.modification_id}
        />

        {/* Состояние */}
        <CarFeature icon={<Cog8ToothIcon className="w-5 h-5 text-gray-600" />} text={car.state} />

        {/* Цвет */}
        <CarFeature icon={<PaintBrushIcon className="w-5 h-5 text-gray-600" />} text={car.color} />

        {/* Пробег */}
        <CarFeature
          icon={<TruckIcon className="w-5 h-5 text-gray-600" />}
          text={car.run ? `${car.run.toLocaleString()} км` : ''}
        />
      </div>
    </div>
  );
};

export default Information;
