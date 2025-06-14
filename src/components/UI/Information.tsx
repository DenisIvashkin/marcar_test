import React from 'react';
import {BoltIcon, Cog8ToothIcon, PaintBrushIcon, TruckIcon} from "@heroicons/react/16/solid";
import {Car} from "@/lib/types";

interface CarCardProps {
    car: Car;
}

const Information = ({car}: CarCardProps) => {
    return (
        <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent truncate cursor-pointer">
                {car.mark_id} {car.folder_id}
            </h3>
            <div className="mt-4 pt-2 border-t flex gap-4 items-baseline">
                <p className="text-2xl font-bold text-gray-600">
                    {car.price.toLocaleString()} ₽
                </p>
                <p className="text-1 font-bold text-gray-400">
                    от {Math.round(car.price/30).toLocaleString()} ₽/мес
                </p>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-4 text-sm">

                {/* Мощность */}
                <div className="flex items-center gap-2">
                    <BoltIcon className="w-5 h-5 text-gray-600" />
                    <div>
                        <p className="text-gray-800">{car.modification_id || '—'}</p>
                    </div>
                </div>

                {/* Состояние */}
                <div className="flex items-center gap-2">
                    <Cog8ToothIcon className="w-5 h-5 text-gray-600" />
                    <div>
                        <p className="text-gray-800">{car.state || '—'}</p>
                    </div>
                </div>

                {/* Цвет */}
                <div className="flex items-center gap-2">
                    <PaintBrushIcon className="w-5 h-5 text-gray-600" />
                    <div>
                        <p className="text-gray-800">{car.color || '—'}</p>
                    </div>
                </div>

                {/* Пробег */}
                <div className="flex items-center gap-2">
                    <TruckIcon className="w-5 h-5 text-gray-600" />
                    <div>
                        <p className="text-gray-800">
                            {car.run ? `${car.run.toLocaleString()} км` : '—'}
                        </p>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Information;