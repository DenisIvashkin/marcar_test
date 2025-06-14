import React from 'react';
import { Car } from '@/lib/types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarSlider from "@/components/UI/CarSlider";
import Information from "@/components/UI/Information";
import Buttons from "@/components/UI/Buttons";

// Импортируем тип

interface CarCardProps {
    car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="relative" style={{height: 240}}>
                   <CarSlider car={car} />

                <div className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {car.year}
                </div>

            </div>

            <div className="p-4">
                <Information car={car}/>
                <Buttons/>
            </div>

        </div>
    );
};