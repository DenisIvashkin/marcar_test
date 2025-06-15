import React from 'react';
import Slider from 'react-slick';
import { Car } from '@/lib/types';

interface CarCardProps {
  car: Car;
}

const CarSlider = ({ car }: CarCardProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-t-lg cursor-grab">
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        className="h-full"
        dotsClass="slick-dots !bottom-1"
        appendDots={(dots) => (
          <div className="bg-black bg-opacity-20 py-2 rounded-full">
            <ul className="!m-0">{dots}</ul>
          </div>
        )}
        customPaging={() => (
          <div className="w-1.5 h-1.5 mx-1 transition-all duration-300 rounded-full" />
        )}
      >
        {car.images.image.slice(0, 5).map((img, index) => (
          <div key={index} className="h-full">
            <img
              src={img}
              alt={`${car.mark_id} ${car.folder_id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
